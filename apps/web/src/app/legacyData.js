// apps/web/src/app/legacyData.js
export function getLegacy() {
  const d = window.APO_DATA ?? {};
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
