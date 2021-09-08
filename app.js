var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function myFunction() {
  var x = document.getElementById("path");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const addStickyNav = () => {
  let header = document.getElementById("main_nav");
  let mobile_header = document.getElementById("mobile_nav");
  if (header) {
    header.classList.toggle("fixed-top", window.scrollY > 50);
    header.classList.toggle("nav-bg", window.scrollY > 50);
  }

  if (mobile_header) {
    mobile_header.classList.toggle("fixed-top", window.scrollY > 50);
  }
};

window.addEventListener("scroll", addStickyNav);

var nav_items = document.querySelectorAll(".nav-item");

nav_items.forEach((item) => {
  item.addEventListener("click", myFunction);
});
