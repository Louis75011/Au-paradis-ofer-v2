import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import DevRouteBadge from "./components/dev/DevRouteBadge.jsx";

function useLegacyScripts() {
  useEffect(() => {
    // éviter renderPages.js (navigation legacy) dès que vous avez React Router.
    const scripts = [
      "/js/data.js",
      "/js/cookieManagement.js",
      "/js/carousel.js",
      "/js/contactForm.js",
      "/js/evenements.js",
      // "/js/main.js", // à réintroduire seulement si vous savez qu’il ne re-pilote pas la navigation
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
  const { pathname } = useLocation();
  useLegacyScripts();

  return (
    <>
      <div style={{ position: "fixed", top: 8, left: 8, zIndex: 99999, background: "#fff", padding: 6 }}>
        Route: {pathname}
      </div>
      {/* Cookie Consent Banner (legacy-friendly) */}
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

      <DevRouteBadge />
      <Header />
      <Outlet />
      <Footer />
      {/* <Header />

      {import.meta.env.DEV ? <DevRouteBadge /> : null}

      <main>
        <Outlet />
      </main>

      <Footer /> */}
    </>
  );
}
