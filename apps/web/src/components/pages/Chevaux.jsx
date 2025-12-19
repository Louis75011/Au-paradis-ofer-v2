// apps/web/src/components/pages/Chevaux.jsx
import { useSiteData } from "../../data/useSiteData.js";

export default function Chevaux() {
  const { chevaux } = useSiteData();

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Nos chevaux</h1>
        <p className="section-intro">
          Des compagnons sélectionnés pour leur douceur, leur stabilité et leur habituation au contact humain.
        </p>

        <div className="cards-grid">
          {chevaux.map((cheval) => (
            <div className="card" key={cheval.nom}>
              <img src={cheval.photo} alt={cheval.nom} className="card-media" />
              <div className="card-content">
                <h3 className="card-title">{cheval.nom}</h3>
                <p className="card-meta">{cheval.type} • {cheval.race} • {cheval.age} ans</p>
                <p className="card-description">{cheval.resume}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
