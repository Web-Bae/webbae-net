import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  perPage: 3,
  focus: 0, // gives us a pagination dot for each element, instead of 1 dot per page
  perMove: 1,
  gap: "1rem",
  pagination: true,
  classes: {
    // Custom class names for the pagination elements
    pagination: "splide__pagination basic",
    page: "splide__pagination__page basic",
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
