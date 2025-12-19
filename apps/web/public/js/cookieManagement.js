// js\cookieManagement.js
// Cookie Management
function initCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        document.getElementById('cookieConsent').classList.add('show');
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookiePreferences', 'true');
    localStorage.setItem('cookieAnalytics', 'true');
    localStorage.setItem('cookieMarketing', 'true');
    document.getElementById('cookieConsent').classList.remove('show');
}

function refuseAllCookies() {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookiePreferences', 'false');
    localStorage.setItem('cookieAnalytics', 'false');
    localStorage.setItem('cookieMarketing', 'false');
    document.getElementById('cookieConsent').classList.remove('show');
}

function showCookiePreferences() {
    document.getElementById('cookieConsent').classList.remove('show');
    showPage('cookie-preferences');

    // Load saved preferences
    document.getElementById('cookie-preferences').checked = localStorage.getItem('cookiePreferences') !== 'false';
    document.getElementById('cookie-analytics').checked = localStorage.getItem('cookieAnalytics') !== 'false';
    document.getElementById('cookie-marketing').checked = localStorage.getItem('cookieMarketing') !== 'false';
}

function saveCookiePreferences() {
    const preferences = document.getElementById('cookie-preferences').checked;
    const analytics = document.getElementById('cookie-analytics').checked;
    const marketing = document.getElementById('cookie-marketing').checked;

    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', preferences);
    localStorage.setItem('cookieAnalytics', analytics);
    localStorage.setItem('cookieMarketing', marketing);

    showPage('accueil');
}
