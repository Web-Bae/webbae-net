import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  perPage: 4,
  focus: "center",
  perMove: 1,
  gap: "3rem",
  pagination: true,
  padding: "2rem",
  breakpoints: {
    991: {
      perPage: 3,
    },
    478: {
      gap: "2rem",
      padding: "4rem",
      perPage: 1,
    },
  },
});

splide.mount();
