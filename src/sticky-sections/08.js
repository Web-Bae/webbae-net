import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    // const isLast = index === panels.length - 1;
    const direction = index % 2 === 0 ? 1 : -1;

    gsap.set(panel.querySelector('.sticky-section_card'), {
      transformOrigin: direction === 1 ? 'left bottom' : 'right bottom',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          scrub: true,
        },
      })
      .to(panel.querySelector('.sticky-section_card'), {
        ease: 'none',
        rotation: direction === 1 ? 90 : -90,
        yPercent: 100,
        opacity: 0,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
