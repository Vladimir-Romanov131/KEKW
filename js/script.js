var carouselItems = document.querySelectorAll(".carousel-item");
var currentSlide = 0;

showSlide(currentSlide);

function showSlide(index) {
  for (var i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.display = "none";
  }
  carouselItems[index].style.display = "block";
  currentSlide = index;
}

setInterval(function () {
  currentSlide++;
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 3000);
