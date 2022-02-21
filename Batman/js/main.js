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

const modalWindow =
  document.querySelector(
    ".modal"
  ); /*создаем действие - при нажатии на кнопку плей, выскакивает видео трейлер Батман 2022 */
const buttonModal = document.querySelector(".main__button-play");

buttonModal.addEventListener("click", (e) => {
  modalWindow.classList.add("active");
});

modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");

  if (!isModal) {
    modalWindow.classList.remove("active");
  }
});
