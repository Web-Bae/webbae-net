import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          scrub: true,
        },
      })
      // Animate panel
      .to(panel, {
        ease: 'none',
        startAt: { filter: 'brightness(100%) contrast(100%)' },
        filter: isLast ? 'none' : 'brightness(50%) contrast(135%)',
      })
      // Animate inner content
      .to(panel.querySelector('img'), {
        ease: 'power1.in',
        yPercent: -40,
        rotation: index % 2 === 0 ? 20 : -20,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
