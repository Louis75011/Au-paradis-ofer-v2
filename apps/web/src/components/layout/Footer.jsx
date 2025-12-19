import { Link } from "react-router-dom";
import "../../styles/components/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Au Paradis O&apos;Fer</h3>
          <p>Centre d&apos;accueil en zoothérapie<br />Médiation animale</p>

          <a
            href="https://www.facebook.com/people/Au-Paradis-OFer/61579988893494/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            <span className="social-text">Facebook</span>
          </a>
        </div>

        <div className="footer-section">
          <h3>Coordonnées</h3>
          <p>
            Tél : 06 48 34 22 53<br />
            Email : au.paradis.o.fer@gmail.com<br />
            15 Rue de Royon<br />
            62310 Sains-lès-Fressin
          </p>
        </div>

        <div className="footer-section">
          <h3>Horaires &amp; Infos</h3>
          <p>Séances sur réservation<br />Accueil familial<br />En semaine, entre 9 h et 18 h</p>
        </div>

        <div className="footer-section">
          <h3>RGPD &amp; Légal</h3>
          <Link to="/mentions">Mentions légales</Link>
          <Link to="/confidentialite">Politique de confidentialité</Link>
          <Link to="/cookies">Politique cookies</Link>
          <Link to="/preferences-cookies">Préférences cookies</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Depuis 2025 — Au Paradis O&apos;Fer — Propulsé par Arx Sytema</p>
      </div>
    </footer>
  );
}
