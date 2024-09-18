import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splide = new splidejsSplide(".splide", {
  type: "loop",
  updateOnMove: true,
  perPage: 3,
  focus: 0, // gives us a pagination dot for each element, remove for 1 dot per page
  perMove: 1,
  gap: "2rem",
  pagination: true,
  classes: {
    pagination: "splide__pagination custom-pagination",
    page: "splide__pagination__page custom-pagination",
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

splide.on("pagination:mounted", function (data) {
  // Inject the page number into the pagination buttons
  // Pad single digits with a leading zero
  data.items.forEach(function (item) {
    item.button.textContent = String(item.page + 1).padStart(2, "0");
  });
});

splide.mount();
