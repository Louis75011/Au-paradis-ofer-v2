// apps/web/src/components/cookies/useCookieConsent.js
import { useCallback, useEffect, useMemo, useState } from "react";

const KEY = {
  consent: "cookieConsent",
  pref: "cookiePreferences",
  analytics: "cookieAnalytics",
  marketing: "cookieMarketing",
};

const readBool = (k, def = true) => {
  const v = localStorage.getItem(k);
  if (v === null) return def;
  return v !== "false";
};

export function useCookieConsent() {
  const [consent, setConsent] = useState(() => localStorage.getItem(KEY.consent)); // null | all | essential | custom

  const prefs = useMemo(() => ({
    preferences: readBool(KEY.pref, true),
    analytics: readBool(KEY.analytics, true),
    marketing: readBool(KEY.marketing, true),
  }), [consent]);

  useEffect(() => {
    // si rien : bannière visible
  }, []);

  const acceptAll = useCallback(() => {
    localStorage.setItem(KEY.consent, "all");
    localStorage.setItem(KEY.pref, "true");
    localStorage.setItem(KEY.analytics, "true");
    localStorage.setItem(KEY.marketing, "true");
    setConsent("all");
  }, []);

  const refuseAll = useCallback(() => {
    localStorage.setItem(KEY.consent, "essential");
    localStorage.setItem(KEY.pref, "false");
    localStorage.setItem(KEY.analytics, "false");
    localStorage.setItem(KEY.marketing, "false");
    setConsent("essential");
  }, []);

  const saveCustom = useCallback(({ preferences, analytics, marketing }) => {
    localStorage.setItem(KEY.consent, "custom");
    localStorage.setItem(KEY.pref, String(!!preferences));
    localStorage.setItem(KEY.analytics, String(!!analytics));
    localStorage.setItem(KEY.marketing, String(!!marketing));
    setConsent("custom");
  }, []);

  return {
    consent,
    showBanner: !consent,
    prefs,
    acceptAll,
    refuseAll,
    saveCustom,
  };
}
