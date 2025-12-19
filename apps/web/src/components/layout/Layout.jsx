// apps/web/src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";

import CookieBanner from "../cookies/CookieBanner.jsx";
import Header from "./Header.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <CookieBanner />
      <Header />
      <MobileMenu />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
