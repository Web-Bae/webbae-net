import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          end: 'max',
          scrub: true,
        },
        defaults: {
          ease: 'none',
        },
      })
      .to(
        panel,
        {
          scale: 0.5,
          yPercent: -30,
        },
        '<'
      );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
