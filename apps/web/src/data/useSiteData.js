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
    const onReady = () => setData(readApoData());

    // cas où data.js est déjà chargé
    if (window.APO_DATA) onReady();

    window.addEventListener("apo:data:ready", onReady);
    return () => window.removeEventListener("apo:data:ready", onReady);
  }, []);

  return useMemo(() => data, [data]);
}
