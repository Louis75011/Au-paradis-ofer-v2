import React, { useEffect } from "react";

function useLegacyScripts() {
  useEffect(() => {
    const scripts = [
      "/js/data.js",
      "/js/cookieManagement.js",
      "/js/carousel.js",
      "/js/renderPages.js",
      "/js/contactForm.js",
      "/js/evenements.js",
      "/js/main.js",
    ];
    const nodes = scripts.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // important : ordre de chargement
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
      {/* Cookie Consent Banner */}
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

      {/* Header Navigation */}
      <header>
        <nav>
          <a href="#accueil" onClick={(e) => { e.preventDefault(); window.navigateTo?.("accueil"); }}>
            <img
              src="/images/logo-sans-fond.png"
              alt="Logo Au Paradis O'Fer - Centre de zoothérapie équine"
              className="logo"
            />
          </a>

          <ul>
            <li><a href="#apropos" onClick={(e) => { e.preventDefault(); window.navigateTo?.("apropos"); }}>À propos</a></li>
            <li><a href="#chevaux" onClick={(e) => { e.preventDefault(); window.navigateTo?.("chevaux"); }}>Nos chevaux</a></li>
            <li><a href="#installations" onClick={(e) => { e.preventDefault(); window.navigateTo?.("installations"); }}>Nos installations</a></li>
            <li><a href="#seances" onClick={(e) => { e.preventDefault(); window.navigateTo?.("seances"); }}>Séances</a></li>
            <li><a href="#gites" onClick={(e) => { e.preventDefault(); window.navigateTo?.("gites"); }}>Gîtes</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); window.navigateTo?.("faq"); }}>FAQ</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); window.navigateTo?.("contact"); }}>Contact</a></li>
          </ul>

          <button className="burger-icon" id="burgerIcon" aria-label="Ouvrir le menu">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      {/* Menu mobile */}
      <div className="mobile-menu" id="mobileMenu">
        <ul>
          <li><a href="#apropos" onClick={(e) => { e.preventDefault(); window.navigateTo?.("apropos"); window.closeMobileMenu?.(); }}>À propos</a></li>
          <li><a href="#chevaux" onClick={(e) => { e.preventDefault(); window.navigateTo?.("chevaux"); window.closeMobileMenu?.(); }}>Nos chevaux</a></li>
          <li><a href="#installations" onClick={(e) => { e.preventDefault(); window.navigateTo?.("installations"); window.closeMobileMenu?.(); }}>Nos installations</a></li>
          <li><a href="#seances" onClick={(e) => { e.preventDefault(); window.navigateTo?.("seances"); window.closeMobileMenu?.(); }}>Séances</a></li>
          <li><a href="#gites" onClick={(e) => { e.preventDefault(); window.navigateTo?.("gites"); window.closeMobileMenu?.(); }}>Gîtes</a></li>
          <li><a href="#faq" onClick={(e) => { e.preventDefault(); window.navigateTo?.("faq"); window.closeMobileMenu?.(); }}>FAQ</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); window.navigateTo?.("contact"); window.closeMobileMenu?.(); }}>Contact</a></li>
        </ul>
      </div>

      <main>
        {/* Accueil */}
        <div id="page-accueil" className="page">
          <div className="carousel-container">
            <div className="carousel-overlay-persistent">
              <h2>Centre d'accueil en zoothérapie</h2>
              <p>Dans un cadre familial, apaisant et verdoyant.</p>
              <div className="carousel-btns">
                <button className="btn" onClick={() => window.showPage?.("seances")}>Réserver les séances</button>
                <button className="btn btn-secondary" onClick={() => window.showPage?.("contact")}>Prendre contact</button>
              </div>
            </div>

            <div className="carousel" id="carousel">
              {[
                { src: "/images/carrousel/au-paradis-ofer-01.jpg", alt: "Au Paradis O'Fer - Zoothérapie équine" },
                { src: "/images/carrousel/au-paradis-ofer-02.jpg", alt: "Au Paradis O'Fer - Nos chevaux" },
                { src: "/images/carrousel/au-paradis-ofer-03.jpg", alt: "Au Paradis O'Fer - Installations" },
                { src: "/images/carrousel/au-paradis-ofer-04.jpg", alt: "Au Paradis O'Fer - Cadre verdoyant" },
                { src: "/images/carrousel/au-paradis-ofer-05.jpg", alt: "Au Paradis O'Fer - Gîtes ruraux" },
                { src: "/images/carrousel/au-paradis-ofer-06.jpg", alt: "Au Paradis O'Fer - Médiation animale" },
                { src: "/images/carrousel/au-paradis-ofer-07.jpg", alt: "Au Paradis O'Fer - Accueil familial" },
              ].map((it) => (
                <div className="carousel-slide" key={it.src}>
                  <img src={it.src} alt={it.alt} />
                </div>
              ))}
            </div>

            <div className="carousel-nav">
              <button onClick={() => window.prevSlide?.()} aria-label="Image précédente">‹</button>
              <button onClick={() => window.nextSlide?.()} aria-label="Image suivante">›</button>
            </div>
          </div>

          <div className="carousel-indicators" id="carouselIndicators"></div>

          <section className="evenements-container">
            <h2 className="section-title">Nos événements</h2>
            <p className="section-subtitle">Découvrez nos animations et ateliers à venir</p>
            <div className="evenements-grid" id="evenementsGrid"></div>
            <div className="evenements-actions">
              <button className="btn btn-secondary" onClick={() => window.showAllEvenements?.()}>Voir tous les événements</button>
            </div>
          </section>

          <div id="evenementsModal" className="modal-evenements">
            <div className="modal-evenements-content">
              <div className="modal-evenements-header">
                <h2>Tous nos événements</h2>
                <button className="modal-close" onClick={() => window.closeEvenementsModal?.()}>&times;</button>
              </div>
              <div className="modal-evenements-body" id="modalEvenementsGrid"></div>
            </div>
          </div>

          <section className="avis-container">
            <h2 className="section-title">Ce qu'ils disent de nous</h2>
            <div className="avis-grid" id="avisGrid"></div>
          </section>
        </div>

        {/* Les autres pages : vos scripts legacy les remplissaient/masquaient. */}
        <div id="page-apropos" className="page hidden"></div>
        <div id="page-chevaux" className="page hidden"></div>
        <div id="page-installations" className="page hidden"></div>
        <div id="page-seances" className="page hidden"></div>
        <div id="page-gites" className="page hidden"></div>
        <div id="page-faq" className="page hidden"></div>
        <div id="page-contact" className="page hidden"></div>
        <div id="page-cookie-preferences" className="page hidden"></div>
        <div id="page-mentions" className="page hidden"></div>
        <div id="page-cookies" className="page hidden"></div>
        <div id="page-confidentialite" className="page hidden"></div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Au Paradis O'Fer</h3>
            <p>Centre d'accueil en zoothérapie<br />Médiation animale</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Depuis 2025 — Au Paradis O'Fer</p>
        </div>
      </footer>
    </>
  );
}
