import { useEffect } from "react";

export function useLegacyScripts() {
  useEffect(() => {
    // IMPORTANT : on retire progressivement renderPages.js puis main.js
    const scripts = [
      "/js/data.js",
      "/js/cookieManagement.js",
      "/js/carousel.js",
      // "/js/renderPages.js",
      "/js/contactForm.js",
      "/js/evenements.js",
      // "/js/main.js",
    ];

    const nodes = scripts.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // ordre
      document.body.appendChild(s);
      return s;
    });

    return () => nodes.forEach((n) => n.remove());
  }, []);
}
