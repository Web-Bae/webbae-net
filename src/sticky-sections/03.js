import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OFFSET_MULTIPLE = 2;

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    panel.style.top = `${index * OFFSET_MULTIPLE}rem`;
    panel.style.minHeight = `calc(100vh - ${index * OFFSET_MULTIPLE}rem)`;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          scrub: true,
        },
      })
      .to(panel, {
        ease: 'none',
      })
      .to(
        panel.querySelector('img'),
        {
          ease: 'power1.in',
          yPercent: -20,
          rotation: index % 2 === 0 ? 20 : -20,
        },
        '<'
      );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
