import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  updateOnMove: true,
  padding: "6rem",
  perPage: 3,
  gap: "1rem",
  pagination: true,
  classes: {
    pagination: "splide__pagination padding",
    page: "splide__pagination__page padding",
  },
  breakpoints: {
    768: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    },
  },
});

splide.mount();
