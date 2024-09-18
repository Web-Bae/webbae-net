import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const basicSplideElements = document.querySelectorAll(".splide.basic");

basicSplideElements.forEach((basicSplide) => {
  const splide = new splidejsSplide(basicSplide, {
    type: "loop",
    updateOnMove: true,
    perPage: 3,
    focus: 0, // gives us a pagination dot for each element, instead of 1 dot per page
    perMove: 1,
    gap: "1rem",
    pagination: true,
    classes: {
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
});
