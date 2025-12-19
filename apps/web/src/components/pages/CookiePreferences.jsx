// apps/web/src/components/pages/CookiePreferences.jsx
export default function CookiePreferences() {
  return (
    <div className="page">
      <section>
        <h1 className="section-title">Préférences cookies</h1>

        <div className="cookie-preferences">
          <p style={{ marginBottom: "2rem" }}>Choisissez les catégories de cookies que vous autorisez.</p>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <h4>Préférences</h4>
              <p>Sauvegarde de réglages d&apos;affichage, langue, etc.</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" id="cookie-preferences" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <h4>Analyses</h4>
              <p>Statistiques anonymes (ex. : Google Analytics).</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" id="cookie-analytics" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <h4>Marketing</h4>
              <p>Ciblage publicitaire et partage à des tiers.</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" id="cookie-marketing" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <button className="btn" style={{ flex: 1 }} onClick={() => window.saveCookiePreferences?.()}>
              Enregistrer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
