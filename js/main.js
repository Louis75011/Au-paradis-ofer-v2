// js\main.js
// Liste des pages valides
const VALID_PAGES = ['accueil', 'apropos', 'chevaux', 'installations', 'seances', 'gites', 'faq', 'contact', 'mentions-legales', 'politique-confidentialite', 'cgv'];

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
    
    // NOUVEAU : Gérer la navigation au chargement de la page
    handleInitialNavigation();
    
    // NOUVEAU : Écouter les changements de hash dans l'URL
    window.addEventListener('hashchange', handleHashChange);
});

// NOUVEAU : Gestion de la navigation initiale
function handleInitialNavigation() {
    const hash = window.location.hash.substring(1); // Enlever le #
    
    if (hash) {
        // Si un hash existe, essayer de naviguer vers cette page
        const pageId = hash.replace('page-', ''); // Support #page-accueil et #accueil
        showPage(pageId);
    } else {
        // Pas de hash : afficher l'accueil par défaut
        showPage('accueil');
    }
}

// NOUVEAU : Gestion des changements de hash
function handleHashChange() {
    const hash = window.location.hash.substring(1);
    const pageId = hash.replace('page-', '');
    
    if (pageId) {
        showPage(pageId);
    } else {
        showPage('accueil');
    }
}

// Page Navigation (version améliorée)
function showPage(pageId) {
    // NOUVEAU : Vérifier si la page existe dans la liste valide
    if (!VALID_PAGES.includes(pageId)) {
        console.warn(`Page "${pageId}" introuvable. Redirection vers l'accueil.`);
        // Rediriger vers l'accueil si page invalide
        pageId = 'accueil';
        window.location.hash = '#accueil';
    }
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // NOUVEAU : Mettre à jour le hash dans l'URL si ce n'est pas déjà fait
        if (window.location.hash !== '#' + pageId) {
            window.location.hash = '#' + pageId;
        }
    } else {
        // NOUVEAU : Si l'élément DOM n'existe pas non plus, forcer l'accueil
        console.error(`Élément DOM "page-${pageId}" introuvable. Redirection vers l'accueil.`);
        const homePage = document.getElementById('page-accueil');
        if (homePage) {
            homePage.classList.remove('hidden');
            window.location.hash = '#accueil';
        }
    }
}
