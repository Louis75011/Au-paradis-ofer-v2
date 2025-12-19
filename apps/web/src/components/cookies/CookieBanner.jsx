export default function CookieBanner() {
  return (
    <div id="cookieConsent" className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-text">
          <strong>Préférences cookies</strong>
          <p>
            Choisissez les catégories de cookies que vous autorisez. Les cookies essentiels au bon fonctionnement du
            site sont toujours actifs.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn btn-secondary" onClick={() => window.refuseAllCookies?.()}>
            Tout refuser
          </button>
          <button className="btn btn-secondary" onClick={() => window.showCookiePreferences?.()}>
            Gérer mes cookies
          </button>
          <button className="btn" onClick={() => window.acceptAllCookies?.()}>
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
