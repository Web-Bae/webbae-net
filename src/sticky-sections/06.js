import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;

    gsap.set(panel, { transformOrigin: isLast ? 'center center' : 'top center' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          end: isLast ? '+=50%' : 'bottom top',
          scrub: true,
          markers: true,
        },
      })
      .to(panel, {
        ease: 'none',
        scale: 0,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
