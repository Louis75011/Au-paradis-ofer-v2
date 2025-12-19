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

function RouteError() {
    return (
        <div style={{ padding: 24 }}>
            <h2>Erreur de navigation</h2>
            <p>Vérifiez la console et la configuration des routes.</p>
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
            { path: "apropos", element: <Apropos /> },
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
        ],
    },
]);
