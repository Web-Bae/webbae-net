import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    const direction = index % 2 === 0 ? 1 : -1;

    gsap.set(panel, { zIndex: panels.length - index });

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
        scale: 0,
        rotation: direction * 45,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
