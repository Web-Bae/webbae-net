import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  perPage: 2,
  //   focus: 0, // gives us a pagination dot for each element, remove for 1 dot per page
  //   perMove: 1,
  arrows: false,
  gap: "2rem",
  pagination: true,
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
