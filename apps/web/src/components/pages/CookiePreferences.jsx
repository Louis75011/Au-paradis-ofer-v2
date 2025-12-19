// apps/web/src/components/pages/CookiePreferences.jsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookieConsent } from "../cookies/useCookieConsent.js";
import "../../styles/pages/legal-pages.scss";

export default function CookiePreferences() {
  const nav = useNavigate();
  const { prefs, saveCustom } = useCookieConsent();

  const [form, setForm] = useState(() => ({ ...prefs }));

  // si on arrive après un refresh et que prefs a changé
  useMemo(() => setForm({ ...prefs }), [prefs.preferences, prefs.analytics, prefs.marketing]);

  const toggle = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.checked }));

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Préférences cookies</h1>
        <div className="cookie-preferences">
          <p style={{ marginBottom: "2rem" }}>Choisissez les catégories de cookies que vous autorisez.</p>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <h4>Préférences</h4>
              <p>Sauvegarde de réglages d'affichage, langue, etc.</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={form.preferences} onChange={toggle("preferences")} />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <h4>Analyses</h4>
              <p>Statistiques anonymes (ex. : Google Analytics).</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={form.analytics} onChange={toggle("analytics")} />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <h4>Marketing</h4>
              <p>Ciblage publicitaire et partage à des tiers.</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={form.marketing} onChange={toggle("marketing")} />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <button
              className="btn"
              style={{ flex: 1 }}
              onClick={() => {
                saveCustom(form);
                nav("/");
              }}
            >
              Enregistrer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
