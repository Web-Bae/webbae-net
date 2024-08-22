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
      .to(panel, {
        ease: 'none',
        startAt: { filter: 'brightness(100%) contrast(100%)' },
        filter: isLast ? 'none' : 'brightness(50%) contrast(135%)',
        xPercent: index % 2 === 0 ? 100 : -100,
      })
      .to(
        panel.querySelector('img'),
        {
          ease: 'power1.in',
          xPercent: index % 2 === 0 ? -30 : 30,
          rotation: index % 2 === 0 ? -90 : 90,
        },
        '<'
      )
      .to(
        panel.querySelector('.sticky-section_content'),
        {
          opacity: 0,
        },
        '<'
      );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  scroll();
});
