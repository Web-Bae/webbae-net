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
          scrub: true,
        },
        defaults: {
          ease: 'none',
        },
      })
      .to(panel.querySelector('.sticky-section_card'), {
        scale: 0.6,
        opacity: 0,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
