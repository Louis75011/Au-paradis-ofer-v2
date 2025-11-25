// ============================================
// NAVIGATION & URL
// ============================================

/**
 * Gère la navigation : affiche la page, met à jour l'URL et ferme le menu mobile
 * @param {string} pageId - identifiant de la page (sans préfixe 'page-')
 */
function navigateTo(pageId) {
    showPage(pageId);
    
    // Mettre à jour l'URL sans recharger la page
    const newUrl = `/${pageId}`;
    window.history.pushState({ page: pageId }, '', newUrl);
    
    // Fermer le menu mobile si ouvert
    closeMobileMenu();
}

/**
 * Affiche la page correspondante et masque les autres
 * @param {string} pageId - identifiant de la page (sans préfixe 'page-')
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Gère le bouton "Précédent" / "Suivant" du navigateur
 */
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        showPage(event.state.page);
    } else {
        // Si aucune state, on affiche l'accueil
        showPage('accueil');
    }
});

// ============================================
// MENU BURGER (MOBILE)
// ============================================

/**
 * Ouvre/ferme le menu mobile
 */
function toggleMobileMenu() {
    const burgerIcon = document.getElementById('burgerIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    
    burgerIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Bloquer le scroll du body quand le menu est ouvert
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Ferme le menu mobile (appelé au clic sur un lien)
 */
function closeMobileMenu() {
    const burgerIcon = document.getElementById('burgerIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    
    burgerIcon.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation des éléments
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
    
    // Attacher l'événement au burger icon
    const burgerIcon = document.getElementById('burgerIcon');
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleMobileMenu);
    }
    
    // Gérer l'URL au chargement initial
    const path = window.location.pathname.substring(1); // Retire le '/'
    if (path && path !== '') {
        showPage(path);
        // Ajouter l'état initial dans l'historique
        window.history.replaceState({ page: path }, '', `/${path}`);
    } else {
        showPage('accueil');
        window.history.replaceState({ page: 'accueil' }, '', '/accueil');
    }
});
