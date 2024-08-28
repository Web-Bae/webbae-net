import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  padding: "6rem",
  perPage: 3,
  gap: "1rem",
  pagination: true,
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
