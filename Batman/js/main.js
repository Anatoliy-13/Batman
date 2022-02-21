const swiper = new Swiper(".main-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".main-slider__arrow",
  },

  breakpoints: {
    320: {
      /* на разширении 320 рх будет 1 слайд*/ slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

let burger = document.querySelector(".menu-burger");
let closeMenu = document.querySelector(".header__menu-close");
let menuMobile = document.querySelector(".header");

burger.addEventListener("click", () => {
  menuMobile.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  menuMobile.style.display = "none";
});
