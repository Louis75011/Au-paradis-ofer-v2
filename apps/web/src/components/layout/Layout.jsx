// apps/web/src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";

import CookieBanner from "../cookies/CookieBanner.jsx";
import Header from "./Header.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Footer from "./Footer.jsx";

import { useSiteData } from "../../data/useSiteData.js";
import FaqChatbot from "../faq/FaqChatbot.jsx";

export default function Layout() {
  const { faqData = [] } = useSiteData();

  return (
    <>
      <CookieBanner />
      <Header />
      <MobileMenu />

      <main className="app-main">
        <Outlet />
      </main>

      <Footer />

      <FaqChatbot faqData={faqData} toEmail="au.paradis.o.fer@gmail.com" />
    </>
  );
}
