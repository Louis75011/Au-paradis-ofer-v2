// apps\web\src\components\routing\ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Si on navigue vers une ancre (#faq, etc.), on laisse le navigateur gérer le scroll d’ancre.
        if (hash) return;

        // Remonter en haut à chaque changement de page
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname, hash]);

    return null;
}
