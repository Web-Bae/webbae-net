import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  updateOnMove: true,
  perPage: 2,
  arrows: false,
  gap: "2rem",
  pagination: true,
  classes: {
    pagination: "splide__pagination two-pack",
    page: "splide__pagination__page two-pack",
    prevArrow: "splide__custom-arrow two-pack-prev",
    nextArrow: "splide__custom-arrow two-pack-next",
  },
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
});

splide.mount();

const prevArrow = document.querySelector(".two-pack-prev");
const nextArrow = document.querySelector(".two-pack-next");

prevArrow.addEventListener("click", () => {
  splide.go("<");
});
nextArrow.addEventListener("click", () => {
  splide.go(">");
});
