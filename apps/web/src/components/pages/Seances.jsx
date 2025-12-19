// apps/web/src/components/pages/Seances.jsx
import { useSiteData } from "../../data/useSiteData.js";
import { NavLink } from "react-router-dom";
import "../../styles/pages/styles-pages.scss";

export default function Seances() {
  const { tarifs } = useSiteData();
  // const bookingUrl = import.meta.env.VITE_GOOGLE_APPOINTMENT_URL;
  const bookingUrl = import.meta.env.VITE_CAL_SEANCES_URL;

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Tarifs des séances de médiation</h1>
        <p className="section-intro">
          Réservation en ligne (calendrier). Si besoin, écrivez-nous et nous conviendrons ensemble du créneau.
          {/* Nous vous invitons à entrer en contact avec nous directement par courriel afin de convenir du moment exact du rendez-vous. Merci d'avance ! */}
        </p>

        <div className="tarifs-grid">
          {tarifs.map((t) => (
            <div className="tarif-card" key={t.intitule}>
              <div className="tarif-title">{t.intitule}</div>
              <div className="tarif-duree">{t.duree}</div>
              <div className="tarif-prix">{t.prix} €</div>
              {t.note ? <div className="tarif-note">{t.note}</div> : null}

              <div className="tarif-contact">
                <a className="btn btn-cream" href={bookingUrl} target="_blank" rel="noreferrer">
                  Réserver
                </a>
              </div>

              <div className="tarif-contact">
                <NavLink className="btn btn-secondary" to="/contact" style={{ width: "100%", display: "inline-block", textAlign: "center" }}>
                  Contact
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
