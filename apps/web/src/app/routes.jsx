// apps/web/src/app/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Accueil from "../components/pages/Accueil.jsx";
import Apropos from "../components/pages/Apropos.jsx";
import Chevaux from "../components/pages/Chevaux.jsx";
import Installations from "../components/pages/Installations.jsx";
import Seances from "../components/pages/Seances.jsx";
import Gites from "../components/pages/Gites.jsx";
import Faq from "../components/pages/Faq.jsx";
import Contact from "../components/pages/Contact.jsx";

import Mentions from "../components/pages/Mentions.jsx";
import Cookies from "../components/pages/Cookies.jsx";
import Confidentialite from "../components/pages/Confidentialite.jsx";
import CookiePreferences from "../components/pages/CookiePreferences.jsx";

import NotFound from "../components/pages/NotFound.jsx";

// routes.jsx
import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";

function RouteError() {
    const err = useRouteError();

    const title = isRouteErrorResponse(err)
        ? `Erreur ${err.status}`
        : "Erreur inattendue";

    const detail = isRouteErrorResponse(err)
        ? err.statusText
        : (err?.message ?? "Consultez la console pour le détail.");

    return (
        <div className="page">
            <h1 className="section-title">{title}</h1>
            <p className="section-intro">{detail}</p>
            <div style={{ textAlign: "center" }}>
                <NavLink className="btn" to="/">Retour à l’accueil</NavLink>
            </div>
        </div>
    );
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <RouteError />,
        children: [
            { index: true, element: <Accueil /> },
            { path: "a-propos", element: <Apropos /> },
            { path: "chevaux", element: <Chevaux /> },
            { path: "installations", element: <Installations /> },
            { path: "seances", element: <Seances /> },
            { path: "gites", element: <Gites /> },
            { path: "faq", element: <Faq /> },
            { path: "contact", element: <Contact /> },

            { path: "mentions", element: <Mentions /> },
            { path: "cookies", element: <Cookies /> },
            { path: "confidentialite", element: <Confidentialite /> },
            { path: "preferences-cookies", element: <CookiePreferences /> },

            // 404 (doit rester en dernier)
            { path: "*", element: <NotFound /> },
        ],
    },
]);
