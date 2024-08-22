import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll(".sticky-section_panel"));

  panels.forEach((panel, index) => {
    let isLast = index === panels.length - 1;
    gsap.fromTo(
      panel,
      { xPercent: -100, rotation: -45 },
      {
        xPercent: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: isLast ? "+=80%" : "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  scroll();
});
