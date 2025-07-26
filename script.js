// Carrusel dinámico
const slides = document.querySelectorAll('.nuevo-carousel .carousel-slide');
const prevBtn = document.querySelector('.nuevo-carousel .carousel-btn.prev');
const nextBtn = document.querySelector('.nuevo-carousel .carousel-btn.next');
const indicators = document.querySelectorAll('.nuevo-carousel .indicator');
const carousel = document.querySelector('.nuevo-carousel');

let current = 0;
let interval = null;
const INTERVAL_TIME = 3500;

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        indicators[i].classList.toggle('active', i === idx);
    });
    current = idx;
}

function nextSlide() {
    let idx = (current + 1) % slides.length;
    showSlide(idx);
}

function prevSlide() {
    let idx = (current - 1 + slides.length) % slides.length;
    showSlide(idx);
}

function startAuto() {
    if (interval) clearInterval(interval);
    interval = setInterval(nextSlide, INTERVAL_TIME);
}

function stopAuto() {
    if (interval) clearInterval(interval);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    startAuto();
});
prevBtn.addEventListener('click', () => {
    prevSlide();
    startAuto();
});
indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
        showSlide(i);
        startAuto();
    });
});

carousel.addEventListener('mouseenter', stopAuto);
carousel.addEventListener('mouseleave', startAuto);

// Inicializar
showSlide(0);
startAuto(); 