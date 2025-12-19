// apps/web/src/components/pages/Gites.jsx — path: /gites
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getLegacy } from "../../app/legacyData.js";

function GiteCard({ gite }) {
  return (
    <div className="tarif-card">
      <div className="tarif-title">{gite.intitule}</div>
      <div className="tarif-duree">{gite.duree}</div>
      <div className="tarif-prix">{gite.prix} {gite.unite}</div>

      {gite.capaciteMax ? <div className="tarif-note">Capacité max : {gite.capaciteMax} personnes</div> : null}
      {gite.note ? <div className="tarif-note">{gite.note}</div> : null}

      <div className="tarif-contact">
        <Link className="btn btn-secondary" to="/contact" style={{ width: "100%" }}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default function Gites() {
  const { gites } = useMemo(() => getLegacy(), []);

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
            <GiteCard key={`${g.intitule}-${g.duree}`} gite={g} />
          ))}
        </div>

        <div style={{ maxWidth: 520, margin: "2rem auto 0" }}>
          <Link className="btn btn-secondary" to="/contact" style={{ width: "100%" }}>
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  );
}
