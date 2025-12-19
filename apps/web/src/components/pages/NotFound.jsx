// apps/web/src/components/pages/NotFound.jsx
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/pages/not-found.scss";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="page notfound">
      <div className="notfound__inner">
        <h1 className="section-title">Page introuvable</h1>
        <p className="section-intro">
          L’adresse <strong>{pathname}</strong> ne correspond à aucune page du site.
        </p>

        <div className="notfound__actions">
          <NavLink className="btn" to="/">Retour à l’accueil</NavLink>
          <NavLink className="btn btn-secondary" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
