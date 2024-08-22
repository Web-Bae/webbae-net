import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel) => {
    gsap.fromTo(
      panel,
      { xPercent: 0, yPercent: 0, rotation: 0 },
      {
        xPercent: gsap.utils.random(-80, 80, 1),
        yPercent: -100,
        rotation: gsap.utils.random(-45, 45, 1),
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          scrub: true,
        },
      }
    );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
