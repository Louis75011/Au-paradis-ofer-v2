import express from "express";
import cors from "cors";
import Stripe from "stripe";

const app = express();
app.use(express.json());

const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5174";
const PUBLIC_SITE_URL = process.env.PUBLIC_SITE_URL || "http://localhost:5174";
const allowed = (process.env.CORS_ORIGIN || "").split(",").map(s => s.trim()).filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    // autoriser calls server-to-server / curl (origin undefined)
    if (!origin) return cb(null, true);
    if (allowed.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"));
  }
}));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function getPriceId(priceKey) {
  if (priceKey === "GITE_BASIC") return process.env.STRIPE_PRICE_GITE_BASIC;
  if (priceKey === "GITE_PLUS") return process.env.STRIPE_PRICE_GITE_PLUS;
  return null;
}

app.post("/checkout/gite", async (req, res) => {
  try {
    const { priceKey } = req.body ?? {};
    const priceId = getPriceId(priceKey);

    if (!priceId) return res.status(400).json({ error: "Invalid priceKey" });

    const successUrl = `${PUBLIC_SITE_URL}/gites?paid=1`;
    const cancelUrl = `${PUBLIC_SITE_URL}/gites?paid=0`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      // metadata: { priceKey }, // utile plus tard (webhook)
    });

    return res.json({ url: session.url });
  } catch (e) {
    // console.error(e);
    console.error("[checkout/gite] error:", e?.message || e);
    return res.status(500).json({ error: "Stripe checkout failed" });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));


const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`API listening on :${port}`));
