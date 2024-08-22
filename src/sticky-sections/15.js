import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

const INITIAL_CONTENT_OPACITY = 0.3;

gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
  const sections = Array.from(document.querySelectorAll('.sticky-scroll-swap_section'));

  sections.forEach((section) => {
    const mediaItems = Array.from(section.querySelectorAll('.sticky-scroll-swap_media-item'));
    const contentItems = Array.from(section.querySelectorAll('.sticky-scroll-swap_content-item'));

    function activateItem(index) {
      mediaItems.forEach((item) => gsap.to(item, { autoAlpha: 0 }));
      contentItems.forEach((item) => gsap.to(item, { autoAlpha: INITIAL_CONTENT_OPACITY }));
      gsap.to(mediaItems[index], { autoAlpha: 1 });
      gsap.to(contentItems[index], { autoAlpha: 1 });
    }

    contentItems.forEach((contentitem, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: contentitem,
          start: 'center center+=25%',
          end: 'bottom center',
          scrub: true,
          markers: true,
          onToggle: () => activateItem(index),
        },
      });
    });

    activateItem(0);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  gsap.matchMedia().add('(min-width: 992px)', () => {
    scroll();
  });
});
