// JavaScript to toggle slides
const carousel = new bootstrap.Carousel('#testimonialCarousel');

function previousSlide() {
  carousel.prev();
}

function nextSlide() {
  carousel.next();
}