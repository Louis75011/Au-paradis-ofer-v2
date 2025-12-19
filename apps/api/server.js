import "dotenv/config";
// const envFile =
//   process.env.NODE_ENV === "production"
//     ? (process.env.APO_ENV_FILE || ".env.production")
//     : (process.env.APO_ENV_FILE || ".env.preprod");

// dotenv.config({ path: new URL(envFile, import.meta.url) });

import express from "express";
import nodemailer from "nodemailer";
import { z } from "zod";
import cors from "cors";
import Stripe from "stripe";

const app = express();
app.disable("x-powered-by");

// --- ENV
const PORT = Number(process.env.PORT || 3000);
const PUBLIC_SITE_URL = process.env.PUBLIC_SITE_URL || "http://localhost:5175";

// CORS : liste séparée par virgules (recommandé)
const allowedOrigins = (process.env.CORS_ORIGIN || PUBLIC_SITE_URL)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// --- Middlewares
app.use(express.json({ limit: "200kb" }));

app.use(
  cors({
    origin: (origin, cb) => {
      // Autoriser server-to-server / curl (origin undefined)
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// --- Health
app.get("/health", (_req, res) => res.json({ ok: true, env: process.env.NODE_ENV || "development" }));

// --- Stripe
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("[env] STRIPE_SECRET_KEY manquant (checkout désactivé tant que non fourni).");
}

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })
  : null;

function getPriceId(priceKey) {
  if (priceKey === "GITE_BASIC") return process.env.STRIPE_PRICE_GITE_BASIC;
  if (priceKey === "GITE_PLUS") return process.env.STRIPE_PRICE_GITE_PLUS;
  return null;
}

app.post("/api/checkout/gite", async (req, res) => {
  try {
    if (!stripe) return res.status(500).json({ error: "Stripe non configuré." });

    const priceKey = req.body?.priceKey;
    const priceId = getPriceId(priceKey);
    if (!priceId) return res.status(400).json({ error: "Invalid priceKey" });

    const successUrl = `${PUBLIC_SITE_URL}/gites?paid=1`;
    const cancelUrl = `${PUBLIC_SITE_URL}/gites?paid=0`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      // metadata: { priceKey }, // utile plus tard via webhook
    });

    return res.json({ url: session.url });
  } catch (e) {
    console.error("[checkout/gite] error:", e?.message || e);
    return res.status(500).json({ error: "Stripe checkout failed" });
  }
});

// --- Anti-spam simple : 10 requêtes / 10 minutes / IP
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 10;
const ipHits = new Map();

function rateLimit(req, res, next) {
  const ip = (req.headers["x-forwarded-for"]?.toString().split(",")[0] ?? req.socket.remoteAddress ?? "unknown").trim();
  const now = Date.now();

  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return next();
  }

  entry.count += 1;
  if (entry.count > RATE_MAX) {
    return res.status(429).json({ ok: false, error: "Trop de tentatives. Réessayez plus tard." });
  }
  return next();
}

// --- Validation
const ContactSchema = z.object({
  nom: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  date: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  website: z.string().optional().or(z.literal("")), // honeypot
});

// --- Mail transport (Gmail ou autre SMTP)
function getTransporter() {
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  // Option 1 : SMTP générique (recommandé si Gmail sans 2FA)
  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

  // Option 2 : Gmail "app password" (souvent nécessite 2FA)
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  if (GMAIL_USER && GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });
  }

  throw new Error("Aucune config SMTP valide (SMTP_* ou GMAIL_*).");
}

app.post("/api/contact", rateLimit, async (req, res) => {
  try {
    const parsed = ContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ ok: false, error: "Champs invalides.", details: parsed.error.flatten() });
    }

    const { nom, email, date, message, website } = parsed.data;

    // Honeypot : répondre OK sans rien faire
    if (website && website.trim().length > 0) return res.json({ ok: true });

    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER ?? process.env.GMAIL_USER;
    if (!CONTACT_TO_EMAIL) return res.status(500).json({ ok: false, error: "CONTACT_TO_EMAIL manquant." });

    const subject = `Contact site — Au Paradis O'Fer — ${nom}`;
    const text =
      `Nouveau message depuis le site Au Paradis O'Fer\n\n` +
      `Nom : ${nom}\n` +
      `Email : ${email}\n` +
      `Date souhaitée : ${date?.trim() ? date.trim() : "Non précisée"}\n\n` +
      `Message :\n${message}\n`;

    const transporter = getTransporter();

    const FROM_EMAIL = process.env.MAIL_FROM ?? process.env.SMTP_USER ?? process.env.GMAIL_USER;
    if (!FROM_EMAIL) return res.status(500).json({ ok: false, error: "MAIL_FROM (ou SMTP_USER/GMAIL_USER) manquant." });

    await transporter.sendMail({
      from: `"Au Paradis O'Fer" <${FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      subject,
      text,
      replyTo: email,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err?.message || err);
    return res.status(500).json({ ok: false, error: "Erreur serveur lors de l'envoi." });
  }
});

// --- Start (une seule fois)
app.listen(PORT, () => console.log(`[api] listening on http://localhost:${PORT}`));
