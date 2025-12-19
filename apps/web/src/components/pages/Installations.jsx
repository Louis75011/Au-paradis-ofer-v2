// apps/web/src/components/pages/Installations.jsx
import { installations } from "../../data/siteData.js";

export default function Installations() {
    return (
        <div className="page">
            <section>
                <h1 className="section-title">Nos installations</h1>
                <p className="section-intro">
                    Nos installations évoluent : l'accueil, le manège semi-couvert, la sellerie, l'allée praticable et l'aire de
                    pansage sont déjà opérationnels, tandis que la chambre d'hôte est en travaux.
                </p>

                <div className="cards-grid">
                    {installations.elements.map((it) => (
                        <div className="card" key={it.nom}>
                            {it.photos?.length ? (
                                <img src={it.photos[0]} alt={it.nom} className="card-image" />
                            ) : null}

                            <div className="card-content">
                                <h3 className="card-title">{it.nom}</h3>
                                {it.dimensions ? <p className="card-meta">{it.dimensions}</p> : null}
                                <p className="card-description">{it.resume}</p>

                                <span className={`card-badge ${it.statut === "en travaux" ? "en-travaux" : ""}`}>
                                    {it.statut === "disponible" ? "Disponible" : "En travaux"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
