import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  perPage: 5,
  focus: "center",
  perMove: 1,
  gap: "3rem",
  pagination: true,
  padding: "2rem",
  breakpoints: {
    478: {
      gap: "2rem",
      padding: "4rem",
      perPage: 1,
    },
  },
  classes: {
    arrows: "splide__arrows splide-basic",
    prev: "splide__arrow--prev basic-prev",
    next: "splide__arrow--next basic-next",
    pagination: "splide__pagination basic-pagination",
  },
});

splide.mount();
