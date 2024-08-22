import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll(".sticky-section_panel"));

  panels.forEach((panel, index) => {
    const direction = index % 2 === 0 ? 1 : -1; // Alternate direction for a bit of added flair

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "bottom top", // Ensures the animation runs through the full height of the panel
          scrub: true,
          // markers: true,
        },
        defaults: {
          ease: "none",
        },
      })
      .set(panel, { transformOrigin: "50% 50%" }) // Centering transform origin for an even scaling and rotation effect
      .to(panel, {
        scaleX: 0.8, // Slightly reduce the width to emphasize the vertical scaling
        scaleY: 0, // Scale down to nothing vertically
        rotation: 5 * direction, // Adding a slight rotation for dynamism
      });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  scroll();
});
