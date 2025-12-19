// apps/web/src/components/cookies/useCookieConsent.js
import { useEffect, useState } from "react";

const KEY_CONSENT = "cookieConsent";
const KEY_PREFS = "cookiePreferences";
const KEY_ANALYTICS = "cookieAnalytics";
const KEY_MARKETING = "cookieMarketing";

function readPrefs() {
  const consent = localStorage.getItem(KEY_CONSENT);

  const prefs = {
    consent: consent ?? null,
    // par défaut : tout à true tant qu’on n’a pas explicitement refusé
    preferences: localStorage.getItem(KEY_PREFS) !== "false",
    analytics: localStorage.getItem(KEY_ANALYTICS) !== "false",
    marketing: localStorage.getItem(KEY_MARKETING) !== "false",
  };

  return prefs;
}

export function useCookieConsent() {
  const [prefs, setPrefs] = useState(() => ({
    consent: null,
    preferences: true,
    analytics: true,
    marketing: true,
  }));

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const p = readPrefs();
    setPrefs(p);
    setShowBanner(!p.consent); // si aucun choix -> bannière visible
  }, []);

  const acceptAll = () => {
    localStorage.setItem(KEY_CONSENT, "all");
    localStorage.setItem(KEY_PREFS, "true");
    localStorage.setItem(KEY_ANALYTICS, "true");
    localStorage.setItem(KEY_MARKETING, "true");
    setPrefs({ consent: "all", preferences: true, analytics: true, marketing: true });
    setShowBanner(false);
  };

  const refuseAll = () => {
    localStorage.setItem(KEY_CONSENT, "essential");
    localStorage.setItem(KEY_PREFS, "false");
    localStorage.setItem(KEY_ANALYTICS, "false");
    localStorage.setItem(KEY_MARKETING, "false");
    setPrefs({ consent: "essential", preferences: false, analytics: false, marketing: false });
    setShowBanner(false);
  };

  const saveCustom = (next) => {
    localStorage.setItem(KEY_CONSENT, "custom");
    localStorage.setItem(KEY_PREFS, String(!!next.preferences));
    localStorage.setItem(KEY_ANALYTICS, String(!!next.analytics));
    localStorage.setItem(KEY_MARKETING, String(!!next.marketing));
    setPrefs({ consent: "custom", ...next });
    setShowBanner(false);
  };

  return { prefs, showBanner, acceptAll, refuseAll, saveCustom };
}
