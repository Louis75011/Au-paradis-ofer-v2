import { useMemo, useState } from "react";

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

export default function HomeEventsSection({ evenements = [] }) {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [detail, setDetail] = useState(null);

  const eventsPreview = useMemo(() => evenements?.slice?.(0, 3) ?? [], [evenements]);
  const eventsAll = evenements ?? [];

  const isPast = (ev) => !!ev?.date && new Date(ev.date) < new Date();

  const openDetail = (ev) => setDetail(ev);
  const closeDetail = () => setDetail(null);

  return (
    <>
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
    </>
  );
}
