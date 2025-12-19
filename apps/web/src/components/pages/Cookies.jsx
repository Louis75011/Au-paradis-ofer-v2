// apps/web/src/components/pages/Cookies.jsx
import "../../styles/components/cookie-consent.scss";
import "../../styles/pages/legal-pages.scss";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <div className="page">
      <div className="legal-content">
        <h1>Politique cookies</h1>

        <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la
          visite d&apos;un site internet. Il permet de conserver des informations relatives à votre navigation.
        </p>

        <h2>Cookies utilisés sur ce site</h2>

        <h3>Cookies essentiels</h3>
        <p>Ces cookies sont nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.</p>
        <ul>
          <li>Cookies de session</li>
          <li>Cookies de sécurité</li>
        </ul>

        <h3>Cookies de préférences</h3>
        <p>Ces cookies permettent de sauvegarder vos préférences (langue, affichage, etc.).</p>

        <h3>Cookies analytiques</h3>
        <p>
          Nous privilégions des solutions sans cookies (ex. Cloudflare Web Analytics / mode cookieless), exemptées de
          consentement par la CNIL.
        </p>

        <h3>Cookies marketing</h3>
        <p>Ces cookies permettent de vous proposer des publicités ciblées. Ils nécessitent votre consentement explicite.</p>

        <h2>Mesure d&apos;audience</h2>
        <p>
          Nous privilégions des solutions sans cookies (ex. Cloudflare Web Analytics / mode cookieless), exemptées de
          consentement par la CNIL.
        </p>

        <h2>Gérer vos préférences</h2>
        <p>
          Vous pouvez à tout moment modifier vos préférences en cliquant sur{" "}
          <Link to="/preferences-cookies" style={{ color: "var(--color-brand-sky)" }}>
            Gérer mes cookies
          </Link>
          .
        </p>

        <p style={{ marginTop: "2rem" }}>
          Voir aussi :{" "}
          <Link to="/confidentialite" style={{ color: "var(--color-brand-sky)" }}>
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </div>
  );
}
