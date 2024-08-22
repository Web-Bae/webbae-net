import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        deafults: {
          ease: 'none',
        },
      })
      .to(panel, {
        rotationX: 15,
        yPercent: -index * 2,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
