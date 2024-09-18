import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splideMain = new splidejsSplide(".splide.main", {
  type: "loop",
  updateOnMove: true,
  perPage: 1,
  pagination: false,
  arrows: false,
});

const splideThumbs = new splidejsSplide(".splide.thumbs", {
  perPage: 6,
  updateOnMove: true,
  isNavigation: true,
  gap: "0.5rem",
  focus: "center",
  rewind: true,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 4,
    },
  },
});

splideMain.sync(splideThumbs);

splideMain.mount();
splideThumbs.mount();
