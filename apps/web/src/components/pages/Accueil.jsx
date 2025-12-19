// apps/web/src/components/pages/Accueil.jsx
import { useEffect, useMemo, useState } from "react";
import { useSiteData } from "../../data/useSiteData.js";
import { NavLink } from "react-router-dom";

export default function Accueil() {
    const { avis, evenements } = useSiteData();
   
    const slides = useMemo(() => ([
        { src: "/images/carrousel/au-paradis-ofer-01.jpg", alt: "Au Paradis O'Fer - Zoothérapie équine" },
        { src: "/images/carrousel/au-paradis-ofer-02.jpg", alt: "Au Paradis O'Fer - Nos chevaux" },
        { src: "/images/carrousel/au-paradis-ofer-03.jpg", alt: "Au Paradis O'Fer - Installations" },
        { src: "/images/carrousel/au-paradis-ofer-04.jpg", alt: "Au Paradis O'Fer - Cadre verdoyant" },
        { src: "/images/carrousel/au-paradis-ofer-05.jpg", alt: "Au Paradis O'Fer - Gîtes ruraux" },
        { src: "/images/carrousel/au-paradis-ofer-06.jpg", alt: "Au Paradis O'Fer - Médiation animale" },
        { src: "/images/carrousel/au-paradis-ofer-07.jpg", alt: "Au Paradis O'Fer - Accueil familial" },
    ]), []);

    const [index, setIndex] = useState(0);
    const [showAllEvents, setShowAllEvents] = useState(false);

    useEffect(() => {
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 6000);
        return () => window.clearInterval(id);
    }, [slides.length]);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    const eventsPreview = evenements?.slice?.(0, 3) ?? [];
    const eventsAll = evenements ?? [];

    return (
        <div className="page">
            {/* Carousel */}
            <div className="carousel-container">
                <div className="carousel-overlay-persistent">
                    <h2>Centre d'accueil en zoothérapie</h2>
                    <p>Dans un cadre familial, apaisant et verdoyant.</p>
                    <div className="carousel-btns">
                        <NavLink className="btn" to="/seances">Réserver les séances</NavLink>
                        <NavLink className="btn btn-secondary" to="/contact">Prendre contact</NavLink>
                    </div>
                </div>

                <div className="carousel" id="carousel">
                    {slides.map((it, i) => (
                        <div
                            className="carousel-slide"
                            key={it.src}
                            style={{ display: i === index ? "block" : "none" }}
                        >
                            <img src={it.src} alt={it.alt} />
                        </div>
                    ))}
                </div>

                <div className="carousel-nav">
                    <button onClick={prev} aria-label="Image précédente">‹</button>
                    <button onClick={next} aria-label="Image suivante">›</button>
                </div>
            </div>

            <div className="carousel-indicators" id="carouselIndicators">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={i === index ? "active" : ""}
                        onClick={() => setIndex(i)}
                        style={{ cursor: "pointer" }}
                    />
                ))}
            </div>

            {/* Événements */}
            <section className="evenements-container">
                <h2 className="section-title">Nos événements</h2>
                <p className="section-subtitle">Découvrez nos animations et ateliers à venir</p>

                <div className="evenements-grid">
                    {eventsPreview.map((ev) => (
                        <div className="evenement-card" key={ev.titre}>
                            {ev.image ? <img src={ev.image} alt={ev.titre} /> : null}
                            <div className="evenement-content">
                                <h3>{ev.titre}</h3>
                                {ev.date ? <p>{ev.date}</p> : null}
                                {ev.resume ? <p>{ev.resume}</p> : null}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="evenements-actions">
                    <button className="btn btn-secondary" onClick={() => setShowAllEvents(true)}>
                        Voir tous les événements
                    </button>
                </div>
            </section>

            {/* Modal événements */}
            <div className={`modal-evenements ${showAllEvents ? "open" : ""}`} id="evenementsModal">
                <div className="modal-evenements-content">
                    <div className="modal-evenements-header">
                        <h2>Tous nos événements</h2>
                        <button className="modal-close" onClick={() => setShowAllEvents(false)}>&times;</button>
                    </div>

                    <div className="modal-evenements-body">
                        <div className="evenements-grid">
                            {eventsAll.map((ev) => (
                                <div className="evenement-card" key={ev.titre}>
                                    {ev.image ? <img src={ev.image} alt={ev.titre} /> : null}
                                    <div className="evenement-content">
                                        <h3>{ev.titre}</h3>
                                        {ev.date ? <p>{ev.date}</p> : null}
                                        {ev.resume ? <p>{ev.resume}</p> : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Avis */}
            <section className="avis-container">
                <h2 className="section-title">Ce qu'ils disent de nous</h2>
                <div className="avis-grid">
                    {avis.map((a, idx) => (
                        <div className="avis-card" key={`${a.author}-${idx}`}>
                            <div className="avis-author">{a.author}</div>
                            <div className="avis-text">{a.text}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
