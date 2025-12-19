// apps/web/src/App.jsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import DevRouteBadge from "./components/dev/DevRouteBadge.jsx";

function useLegacyScripts(scripts = []) {
  useEffect(() => {
    if (!scripts.length) return;

    const nodes = scripts.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      // s.type = "module"; // à activer si vos scripts legacy utilisent import/export
      document.body.appendChild(s);
      return s;
    });

    return () => nodes.forEach((n) => n.remove());
  }, [scripts]);
}

export default function App() {
  useLegacyScripts();

  return (
    <>
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
            <button className="btn btn-secondary" onClick={() => window.refuseAllCookies?.()}>Tout refuser</button>
            <button className="btn btn-secondary" onClick={() => window.showCookiePreferences?.()}>Gérer mes cookies</button>
            <button className="btn" onClick={() => window.acceptAllCookies?.()}>Tout accepter</button>
          </div>
        </div>
      </div>

      {import.meta.env.DEV ? <DevRouteBadge /> : null}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}