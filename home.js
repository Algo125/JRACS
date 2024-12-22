const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const cardWidth = document.querySelector('.card').offsetWidth + 16; // Card width + gap
const totalCards = document.querySelectorAll('.card').length;

nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - 3) { // Adjust for visible cards
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
