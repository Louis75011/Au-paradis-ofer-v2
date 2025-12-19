// apps/web/src/data/useSiteData.js
import { useEffect, useMemo, useState } from "react";

const EMPTY = Object.freeze({
  evenements: [],
  chevaux: [],
  installations: [],
  tarifs: [],
  gites: [],
  avis: [],
  faqData: [],
});

function readApoData() {
  const d = window.APO_DATA;
  if (!d) return EMPTY;

  return {
    evenements: d.evenements ?? [],
    chevaux: d.chevaux ?? [],
    // selon votre ancien data.js : parfois { elements: [...] }
    installations: d.installations?.elements ?? d.installations ?? [],
    tarifs: d.tarifs ?? [],
    gites: d.gites ?? [],
    avis: d.avis ?? [],
    faqData: d.faqData ?? [],
  };
}

export function useSiteData() {
  const [data, setData] = useState(() => readApoData());

  useEffect(() => {
    // data.js est injecté après mount -> on “attend” qu’il existe
    let tries = 0;
    const id = window.setInterval(() => {
      tries += 1;
      const next = readApoData();
      if (window.APO_DATA || tries > 50) {
        setData(next);
        window.clearInterval(id);
      }
    }, 50);

    return () => window.clearInterval(id);
  }, []);

  // mémo optionnel : on renvoie une référence stable
  return useMemo(() => data, [data]);
}
