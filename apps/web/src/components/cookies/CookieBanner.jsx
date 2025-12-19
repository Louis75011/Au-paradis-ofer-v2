// apps/web/src/components/cookies/CookieBanner.jsx
// apps/web/src/components/cookies/CookieBanner.jsx
import { useNavigate } from "react-router-dom";
import { useCookieConsent } from "./useCookieConsent.js";
import "../../styles/components/cookie-consent.scss";

export default function CookieBanner() {
  const nav = useNavigate();
  const { showBanner, acceptAll, refuseAll } = useCookieConsent();

  return (
    <div id="cookieConsent" className={`cookie-consent ${showBanner ? "show" : ""}`}>
      <div className="cookie-content">
        <div className="cookie-text">
          <strong>Préférences cookies</strong>
          <p>
            Choisissez les catégories de cookies que vous autorisez. Les cookies essentiels au bon fonctionnement du site
            sont toujours actifs.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn btn-secondary" onClick={refuseAll}>Tout refuser</button>
          <button className="btn btn-secondary" onClick={() => nav("/preferences-cookies")}>Gérer mes cookies</button>
          <button className="btn" onClick={acceptAll}>Tout accepter</button>
        </div>
      </div>
    </div>
  );
}
