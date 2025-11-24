// js\carousel.js
// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
    const carousel = document.getElementById('carousel');
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
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('button');
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
    updateIndicators();
}

// Auto-play carousel
setInterval(nextSlide, 5000);