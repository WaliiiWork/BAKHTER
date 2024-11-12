document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const counter = document.querySelector('.slide-counter');
    let currentSlide = 0;

    function updateSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        updateSlider();
    });

    // Auto slide (optional)
    setInterval(() => {
        currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        updateSlider();
    }, 5000);
});
