// js\carousel.js
// Carousel
let currentSlide = 0;
let slides = null;
let totalSlides = 0;
let autoPlayInterval = null;

// Fonction d'initialisation principale
function initCarousel() {
    slides = document.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;
    
    if (totalSlides === 0) return; // Sécurité si aucune slide
    
    createIndicators();
    updateCarousel();
    startAutoPlay();
    setupHoverPause();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function createIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;
    
    // IMPORTANT : Vider le conteneur avant de créer les indicateurs
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('button');
        indicator.setAttribute('aria-label', `Aller à l'image ${i + 1}`);
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
    updateIndicators();
}

function startAutoPlay() {
    // Arrêter l'auto-play existant s'il y en a un
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
    autoPlayInterval = setInterval(nextSlide, 5000);
}

function setupHoverPause() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;
    
    carouselContainer.addEventListener('mouseenter', () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    });

    carouselContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

// Initialisation au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    // DOM déjà chargé
    initCarousel();
}
