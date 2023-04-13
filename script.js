const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides[currentSlide].classList.remove('active');
  slides[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

function nextSlide() {
  let nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex >= slides.length) {
    nextSlideIndex = 0;
  }
  showSlide(nextSlideIndex);
}

function previousSlide() {
  let previousSlideIndex = currentSlide - 1;
  if (previousSlideIndex < 0) {
    previousSlideIndex = slides.length - 1;
  }
  showSlide(previousSlideIndex);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    previousSlide();
  }
});

setInterval(nextSlide, 5000);
