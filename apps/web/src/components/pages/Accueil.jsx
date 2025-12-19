// apps\web\src\components\pages\Accueil.jsx
import { useSiteData } from "../../data/useSiteData.js";
import "../../styles/components/carousel.scss";
import "../../styles/pages/evenements.scss";
import "../../styles/pages/styles-pages.scss";

import HomeHeroCarousel from "../home/HomeHeroCarousel.jsx";
import HomeEventsSection from "../home/HomeEventsSection.jsx";
import HomeReviewsSection from "../home/HomeReviewsSection.jsx";

export default function Accueil() {
  const { avis = [], evenements = [] } = useSiteData();

  return (
    <div className="page page--home">
      {/* Carousel */}
      <HomeHeroCarousel />

      {/* Contenu sous hero : on remet un conteneur "page" pour l’air */}
      <div className="page">
        {/* Événements */}
        <HomeEventsSection evenements={evenements} />

        {/* Avis */}
        <HomeReviewsSection avis={avis} />
      </div>
    </div>
  );
}
