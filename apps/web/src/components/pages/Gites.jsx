// apps/web/src/components/pages/Gites.jsx
import { useSiteData } from "../../data/useSiteData.js";

export default function Gites() {
  const { gites } = useSiteData();

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Gîte – prochainement</h1>

        <div className="section-intro">
          <p>Nous préparons un hébergement simple et chaleureux sur place pour prolonger l&apos;expérience au contact des chevaux.</p>
          <p>Informations, photos et réservation arriveront bientôt.</p>
          <p>À terme, les réservations en ligne seront possibles ; pour le moment, n&apos;hésitez pas à prendre contact avec nous pour en savoir plus sur nos avancées.</p>
        </div>

        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <h3 style={{ color: "var(--color-brand-dark)", marginBottom: "1rem" }}>État d&apos;avancement</h3>
          <div>
            <span className="status-badge status-config">Configuration de l&apos;accueil</span>
            <span className="status-badge status-travaux">Chambres en chantier</span>
            <span className="status-badge status-avenir">Équipements &amp; sécurité à venir</span>
          </div>
          <p style={{ marginTop: "1rem", fontWeight: 600, color: "var(--color-brand-dark)" }}>
            Ouverture prévisionnelle : courant 2026
          </p>
        </div>

        <div className="tarifs-grid" style={{ marginTop: "3rem" }}>
          {gites.map((g) => (
            <div className="tarif-card" key={g.intitule}>
              <div className="tarif-title">{g.intitule}</div>
              <div className="tarif-duree">{g.duree}</div>
              <div className="tarif-prix">
                {g.prix} {g.unite}
              </div>
              {g.capaciteMax ? <div className="tarif-note">Capacité max : {g.capaciteMax} personnes</div> : null}
              {g.note ? <div className="tarif-note">{g.note}</div> : null}

              <div className="tarif-contact">
                <a className="btn btn-secondary" href="/contact" style={{ width: "100%", display: "inline-block" }}>
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
