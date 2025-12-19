import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomeHeroCarousel() {
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

  // ✅ plus rapide
  const INTERVAL_MS = 2800;

  const intervalRef = useRef(null);
  const pausedRef = useRef(false);

  const stopAuto = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startAuto = () => {
    stopAuto();
    if (!slides.length) return;
    intervalRef.current = window.setInterval(() => {
      if (pausedRef.current) return;
      setSlideIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Pause au survol / focus / touch (conserve le confort)
  const onTouchStart = () => {
    pausedRef.current = true;
  };
  const onTouchEnd = () => {
    pausedRef.current = false;
  };

  return (
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

      <div
        className="carousel"
        aria-label="Carrousel accueil"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onFocusCapture={() => (pausedRef.current = true)}
        onBlurCapture={() => (pausedRef.current = false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-track">
          {slides.map((it, i) => (
            <div
              className={`carousel-slide ${i === slideIndex ? "is-active" : ""}`}
              key={it.src}
              aria-hidden={i !== slideIndex}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
