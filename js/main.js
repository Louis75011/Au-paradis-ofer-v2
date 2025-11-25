// js/main.js

// Page Navigation - EXPOSÉE GLOBALEMENT
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initCookieConsent();
    createIndicators();
    renderChevaux();
    renderInstallations();
    renderTarifs();
    renderGites();
    renderAvis();
    renderFAQ();
    
    // Charger les événements si disponible
    if (typeof loadEvenementsRecents === 'function') {
        loadEvenementsRecents();
    }
    
    // Afficher l'accueil par défaut
    showPage('accueil');
});
