import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;
    const direction = index % 2 === 0 ? 1 : -1;

    function getTranformOrigin() {
      let t = direction === 1 ? 'left' : 'right';
      if (isLast) {
        t += ' center';
      } else {
        t += ' top';
      }
      return t;
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          end: isLast ? '+=50%' : 'bottom top',
          scrub: true,
        },
      })
      .set(panel, { transformOrigin: getTranformOrigin() })
      .to(panel, {
        ease: 'none',
        scale: 0,
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
