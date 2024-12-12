document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('mainCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: false,
        wrap: true
    });

    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function updateDots(slideIndex) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }

    function handleSlide(direction) {
        if (direction === 'prev') {
            carouselInstance.prev();
        } else {
            carouselInstance.next();
        }
    }

    function goToSlide(index) {
        carouselInstance.to(index);
    }

    // Event listener for slide change
    carousel.addEventListener('slide.bs.carousel', function(e) {
        currentSlide = e.to;
        updateDots(currentSlide);
    });

    // Bind event listeners for arrow buttons
    document.getElementById('prevBtn').addEventListener('click', function() {
        handleSlide('prev');
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        handleSlide('next');
    });

    // Initialize dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
});
