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
});

// Page Navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}