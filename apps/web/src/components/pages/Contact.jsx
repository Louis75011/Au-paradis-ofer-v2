// apps/web/src/components/pages/Contact.jsx
import { useState } from "react";
import "../../styles/pages/styles-pages.scss";
import "../../styles/components/contact-form.scss";
// au.paradis.o.fer@gmail.com

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", date: "", message: "" });

  const onChange = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact via le site Au Paradis O'Fer");
    const body = encodeURIComponent(
      `Nom : ${form.nom}\n` +
      `Email : ${form.email}\n` +
      `Date souhaitée : ${form.date || "Non précisée"}\n\n` +
      `Message :\n${form.message}`
    );

    window.location.href = `mailto:au.paradis.o.fer@gmail.com?subject=${subject}&body=${body}`;

    setForm({ nom: "", email: "", date: "", message: "" });
    window.alert("Merci pour votre message ! Votre client de messagerie va s'ouvrir.");
  };

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Contact &amp; Réservation</h1>

        <div className="section-intro">
          <p>Email : <a href="mailto:au.paradis.o.fer@gmail.com">au.paradis.o.fer@gmail.com</a></p>
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

          <button type="submit" className="btn" style={{ width: "100%" }}>
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}
