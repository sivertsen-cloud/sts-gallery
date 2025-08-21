let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function () {
  showSlides(slideIndex);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("product-images");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "inline-flex";
  // slides[slideIndex - 1].style.justifyContent = "center";
  // slides[slideIndex - 1].style.width = "200px";
  // dots[slideIndex - 1].className += " active";
}

// jQuery for carousel setup
document.addEventListener('DOMContentLoaded', function () {
  $(".carousel .item").each(function () {
    var i = $(this).next();
    if (!i.length) {
      i = $(this).siblings(":first");
    }
    i.children(":first-child").clone().appendTo($(this));

    for (var n = 0; n < 4; n++) {
      i = i.next();
      if (!i.length) {
        i = $(this).siblings(":first");
      }
      i.children(":first-child").clone().appendTo($(this));
    }
  });
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
window.showSlides = showSlides;

module.exports = {
  showSlides,
  plusSlides,
  currentSlide,
};