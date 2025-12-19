// apps/web/src/App.jsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import DevRouteBadge from "./components/dev/DevRouteBadge.jsx";

function useLegacyScripts() {
  useEffect(() => {
    const scripts = [
      "/js/data.js",
      "/js/cookieManagement.js",
      "/js/carousel.js",
      "/js/evenements.js",
      // "/js/contactForm.js", // inutile dès qu’on gère le submit en React
    ];

    const nodes = scripts.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
      return s;
    });

    return () => nodes.forEach((n) => n.remove());
  }, []);
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