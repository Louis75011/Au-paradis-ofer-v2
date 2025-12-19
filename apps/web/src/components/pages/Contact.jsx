// apps/web/src/components/pages/Contact.jsx
import "../../styles/components/contact-form.scss";

export default function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const nom = form.nom.value;
    const email = form.email.value;
    const date = form.date.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Contact via le site Au Paradis O'Fer");
    const body = encodeURIComponent(
      `Nom : ${nom}\n` +
      `Email : ${email}\n` +
      `Date souhaitée : ${date || "Non précisée"}\n\n` +
      `Message :\n${message}`
    );

    window.location.href = `mailto:au.paradis.o.fer@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
    alert("Merci pour votre message ! Votre client de messagerie va s'ouvrir.");
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

        <form className="contact-form" id="contactForm" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom complet *</label>
            <input type="text" id="nom" name="nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date souhaitée</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" placeholder="Votre demande ou précision..." required />
          </div>
          <button type="submit" className="btn" style={{ width: "100%" }}>
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}
