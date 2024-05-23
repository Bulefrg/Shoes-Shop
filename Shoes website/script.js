let searchForm = document.querySelector(".search-form");

document.querySelector("#search-bar").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");

  console.log("Scrolling, window.scrollY:", window.scrollY);

  if (window.scrollY > 30) {
    document.querySelector("header").classList.add("header-active");
    console.log("Added header-active class");
  } else {
    document.querySelector("header").classList.remove("header-active");
    console.log("Removed header-active class");
  }
};

var swiper = new Swiper(".featured-slider", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
