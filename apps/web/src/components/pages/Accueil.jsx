// apps/web/src/components/pages/Accueil.jsx
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSiteData } from "../../data/useSiteData.js";

import "../../styles/components/carousel.scss";
import "../../styles/pages/evenements.scss";
import "../../styles/pages/styles-pages.scss";

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateString ?? "";
  }
};

export default function Accueil() {
  const { avis = [], evenements = [] } = useSiteData();

  // Carousel
  const slides = useMemo(
    () => [
      { src: "/images/carrousel/au-paradis-ofer-01.jpg", alt: "Au Paradis O'Fer - Zoothérapie équine" },
      { src: "/images/carrousel/au-paradis-ofer-02.jpg", alt: "Au Paradis O'Fer - Nos chevaux" },
      { src: "/images/carrousel/au-paradis-ofer-03.jpg", alt: "Au Paradis O'Fer - Installations" },
      { src: "/images/carrousel/au-paradis-ofer-04.jpg", alt: "Au Paradis O'Fer - Cadre verdoyant" },
      { src: "/images/carrousel/au-paradis-ofer-05.jpg", alt: "Au Paradis O'Fer - Gîtes ruraux" },
      { src: "/images/carrousel/au-paradis-ofer-06.jpg", alt: "Au Paradis O'Fer - Médiation animale" },
      { src: "/images/carrousel/au-paradis-ofer-07.jpg", alt: "Au Paradis O'Fer - Accueil familial" },
    ],
    []
  );

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const prev = () => setSlideIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setSlideIndex((i) => (i + 1) % slides.length);

  // Événements
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [detail, setDetail] = useState(null);

  const eventsPreview = evenements?.slice?.(0, 3) ?? [];
  const eventsAll = evenements ?? [];

  const isPast = (ev) => !!ev?.date && new Date(ev.date) < new Date();

  const openDetail = (ev) => setDetail(ev);
  const closeDetail = () => setDetail(null);

  return (
    <div className="page page--home">
      {/* Carousel */}
      <div className="carousel-container carousel-container--hero">
        <div className="carousel-overlay-persistent">
          <h2>Centre d'accueil en zoothérapie</h2>
          <p>Dans un cadre familial, apaisant et verdoyant.</p>
          <div className="carousel-btns">
            <NavLink className="btn" to="/seances">
              Réserver les séances
            </NavLink>
            <NavLink className="btn btn-secondary" to="/contact">
              Prendre contact
            </NavLink>
          </div>
        </div>

        <div className="carousel" aria-label="Carrousel accueil">
          {slides.map((it, i) => (
            <div
              className="carousel-slide"
              key={it.src}
              style={{ display: i === slideIndex ? "block" : "none" }}
              aria-hidden={i !== slideIndex}
            >
              <img src={it.src} alt={it.alt} />
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button type="button" onClick={prev} aria-label="Image précédente">
            ‹
          </button>
          <button type="button" onClick={next} aria-label="Image suivante">
            ›
          </button>
        </div>
      </div>

      <div className="carousel-indicators" aria-label="Indicateurs carrousel">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === slideIndex ? "active" : ""}
            onClick={() => setSlideIndex(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSlideIndex(i);
            }}
            role="button"
            tabIndex={0}
            aria-label={`Aller à l’image ${i + 1}`}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* Contenu sous hero : on remet un conteneur "page" pour l’air */}
      <div className="page">
        {/* Événements */}
        <section className="evenements-container">
          <h2 className="section-title">Nos événements</h2>
          <p className="section-subtitle">Découvrez nos animations et ateliers à venir</p>

          <div className="evenements-grid">
            {eventsPreview.map((ev) => (
              <div
                className={`evenement-card ${isPast(ev) ? "perime" : ""}`}
                key={ev.id ?? ev.titre}
                onClick={() => openDetail(ev)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openDetail(ev);
                }}
                role="button"
                tabIndex={0}
              >
                {isPast(ev) ? <span className="evenement-badge">Passé</span> : null}
                {ev.image ? <img src={ev.image} alt={ev.titre} className="evenement-image" /> : null}
                <div className="evenement-info">
                  <h3 className="evenement-titre">{ev.titre}</h3>
                  {ev.date ? <p className="evenement-date">{formatDate(ev.date)}</p> : null}
                </div>
              </div>
            ))}
          </div>

          <div className="evenements-actions">
            <button type="button" className="btn btn-secondary" onClick={() => setShowAllEvents(true)}>
              Voir tous les événements
            </button>
          </div>
        </section>

        {/* Modal: Tous */}
        <div
          className={`modal-evenements ${showAllEvents ? "active" : ""}`}
          id="evenementsModal"
          onClick={(e) => {
            if (e.target.id === "evenementsModal") setShowAllEvents(false);
          }}
          aria-hidden={!showAllEvents}
        >
          <div className="modal-evenements-content" role="dialog" aria-modal="true" aria-label="Tous les événements">
            <div className="modal-evenements-header">
              <h2>Tous nos événements</h2>
              <button type="button" className="modal-close" onClick={() => setShowAllEvents(false)} aria-label="Fermer">
                &times;
              </button>
            </div>

            <div className="modal-evenements-body">
              <div className="evenements-grid">
                {eventsAll.map((ev) => (
                  <div
                    className={`evenement-card ${isPast(ev) ? "perime" : ""}`}
                    key={ev.id ?? ev.titre}
                    onClick={() => openDetail(ev)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openDetail(ev);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {isPast(ev) ? <span className="evenement-badge">Passé</span> : null}
                    {ev.image ? <img src={ev.image} alt={ev.titre} className="evenement-image" /> : null}
                    <div className="evenement-info">
                      <h3 className="evenement-titre">{ev.titre}</h3>
                      {ev.date ? <p className="evenement-date">{formatDate(ev.date)}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Détail */}
        <div
          className={`modal-evenements modal-detail-evenement ${detail ? "active" : ""}`}
          onClick={(e) => {
            // clic hors contenu => ferme
            if (e.target.classList?.contains("modal-detail-evenement")) closeDetail();
          }}
          aria-hidden={!detail}
        >
          {detail ? (
            <div className="modal-evenements-content" role="dialog" aria-modal="true" aria-label="Détail événement">
              <div className="modal-evenements-header">
                <h2>{detail.titre}</h2>
                <button type="button" className="modal-close" onClick={closeDetail} aria-label="Fermer">
                  ×
                </button>
              </div>
              <div className="modal-evenements-body">
                {detail.image ? (
                  <img src={detail.image} alt={detail.titre} style={{ width: "100%", display: "block" }} />
                ) : null}
                <div className="modal-detail-info">
                  {detail.date ? (
                    <p>
                      <strong>{formatDate(detail.date)}</strong>
                    </p>
                  ) : null}
                  {detail.resume ? <p>{detail.resume}</p> : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Avis */}
        <section className="avis-container">
          <h2 className="section-title">Ce qu&apos;ils disent de nous</h2>
          <div className="avis-grid">
            {avis.map((a, idx) => (
              <div className="avis-card" key={`${a.author ?? "Auteur"}-${idx}`}>
                <div className="avis-author">{a.author}</div>
                <div className="avis-text">{a.text}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
