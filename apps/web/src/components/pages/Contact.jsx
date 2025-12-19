// apps/web/src/components/pages/Contact.jsx
import { useState } from "react";
import "../../styles/pages/styles-pages.scss";
import "../../styles/components/contact-form.scss";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", date: "", message: "", website: "" }); // website = honeypot
  const [status, setStatus] = useState({ loading: false, ok: null, message: "" });

  const onChange = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const fallbackMailto = () => {
    const subject = encodeURIComponent("Contact via le site Au Paradis O'Fer");
    const body = encodeURIComponent(
      `Nom : ${form.nom}\n` +
      `Email : ${form.email}\n` +
      `Date souhaitée : ${form.date || "Non précisée"}\n\n` +
      `Message :\n${form.message}`
    );
    window.location.href = `mailto:au.paradis.o.fer@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, message: "" });

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        const msg = data?.error || "Envoi impossible pour le moment.";
        setStatus({
          loading: false,
          ok: false,
          message: `${msg} Vous pouvez essayer l'envoi via votre messagerie.`,
        });
        return;
      }

      setStatus({ loading: false, ok: true, message: "Merci. Votre message a bien été envoyé." });
      setForm({ nom: "", email: "", date: "", message: "", website: "" });
    } catch {
      setStatus({
        loading: false,
        ok: false,
        message: "Le service d’envoi est indisponible. Vous pouvez envoyer via votre messagerie.",
      });
    }
  };

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Contact &amp; Réservation</h1>

        <div className="section-intro">
          <p>
            Email : <a href="mailto:au.paradis.o.fer@gmail.com">au.paradis.o.fer@gmail.com</a>
          </p>
          <p>
            Réseaux sociaux <i className="fa-brands fa-facebook-f" aria-hidden="true"></i> :{" "}
            <a
              href="https://www.facebook.com/people/Au-Paradis-OFer/61579988893494/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-text">Facebook</span>
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          {/* Honeypot (anti-bot) : caché visuellement */}
          <div style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
            <label htmlFor="website">Ne pas remplir</label>
            <input id="website" name="website" value={form.website} onChange={onChange("website")} autoComplete="off" tabIndex={-1} />
          </div>

          <div className="form-group">
            <label htmlFor="nom">Nom complet *</label>
            <input id="nom" name="nom" required value={form.nom} onChange={onChange("nom")} />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={onChange("email")} />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date souhaitée</label>
            <input id="date" name="date" type="date" value={form.date} onChange={onChange("date")} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Votre demande ou précision..."
              value={form.message}
              onChange={onChange("message")}
            />
          </div>

          <button type="submit" className="btn" style={{ width: "100%" }} disabled={status.loading}>
            {status.loading ? "Envoi…" : "Envoyer"}
          </button>

          {status.ok === true ? (
            <p style={{ marginTop: "1rem" }}>{status.message}</p>
          ) : null}

          {status.ok === false ? (
            <div style={{ marginTop: "1rem" }}>
              <p>{status.message}</p>
              <button type="button" className="btn btn-secondary" onClick={fallbackMailto}>
                Envoyer via ma messagerie
              </button>
            </div>
          ) : null}
        </form>
      </section>
    </div>
  );
}
