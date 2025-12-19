// apps/web/src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import DevRouteBadge from "./components/dev/DevRouteBadge.jsx";
import CookieBanner from "./components/cookies/CookieBanner.jsx";

export default function App() {
  return (
    <>
      {import.meta.env.DEV ? <DevRouteBadge /> : null}

      {/* Bannière cookies : s’affiche seulement si pas de choix */}
      <CookieBanner />

      <Header />
           <main className="app-main">
       <Outlet />
     </main>
      <Footer />
    </>
  );
}