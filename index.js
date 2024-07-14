let currentIndex = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

document.querySelector('.left-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
});

document.querySelector('.right-button').addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
});
