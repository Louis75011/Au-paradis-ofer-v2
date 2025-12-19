// apps/web/src/app/legacyData.js — path: (utilitaire)
export function getLegacy() {
  // data.js définit normalement: chevaux, installations, tarifs, gites, avis, faqData
  return {
    chevaux: window.chevaux ?? [],
    installations: window.installations?.elements ?? [],
    tarifs: window.tarifs ?? [],
    gites: window.gites ?? [],
    avis: window.avis ?? [],
    faqData: window.faqData ?? [],
  };
}
