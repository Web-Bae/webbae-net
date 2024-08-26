import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  perPage: 3,
  focus: 0, // gives us a pagination dot for each element, remove for 1 dot per page
  perMove: 1,
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
  classes: {
    arrows: "splide__arrows splide-basic",
    prev: "splide__arrow--prev basic-prev",
    next: "splide__arrow--next basic-next",
    pagination: "splide__pagination basic-pagination",
  },
});

splide.mount();
