// Import GSAP and the ScrollTrigger plugin from a CDN (Content Delivery Network)
import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

// Make ScrollTrigger available for use in GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Select the HTML elements needed for the animation
const horizontalSection = document.querySelector("#horizontal-section");
const wrapper = horizontalSection.querySelector(".wrapper");
const items = wrapper.querySelectorAll(".item");

// Function for the horizontal scrolling effect and the parallax effect
function initScroll() {
  // HORIZONTAL SCROLLING EFFECT
  let wrapperTween = gsap.to(wrapper, {
    x: () => {
      const itemWidth = items[0].offsetWidth;
      const marginRight = parseInt(getComputedStyle(items[0]).marginRight, 10);
      const distance = (itemWidth + marginRight) * items.length;
      return (distance - window.innerWidth) * -1;
    },
    ease: "none",
    scrollTrigger: {
      trigger: horizontalSection,
      pin: true,
      start: "top top",
      end: () => `+=${items[0].offsetWidth * items.length}`,
      scrub: 1,
      invalidateOnRefresh: true, // Recalculates the start and end points when the window is resized
    },
  });

  // PARALLAX EFFECT
  items.forEach((item) => {
    gsap.fromTo(
      item,
      {
        backgroundPosition: "0 50%", // Start the image in the center on the left
      },
      {
        backgroundPosition: "100% 50%", // End the image in the center on the right
        ease: "none",
        scrollTrigger: {
          trigger: item,
          containerAnimation: wrapperTween, // Link the animation to the main scrolling tween
          start: "left right", // Start the animation when the left side of the item hits the right side of the viewport
          end: "right left",
          scrub: true,
        },
      }
    );
  });
}

// Function for the skew effect
function applySkewEffect() {
  let proxy = { skew: 0 }; // Object to keep track of the current skew value
  const skewSetter = gsap.quickSetter(".item", "skewX", "deg"); // Helper to optimize performance
  const clamp = gsap.utils.clamp(-20, 20); // Ensure the skew angle stays between -20 and 20 degrees

  // Create a ScrollTrigger instance to monitor scroll events
  ScrollTrigger.create({
    onUpdate: (self) => {
      const skew = clamp(self.getVelocity() / -200);
      // Only update the skew value if it's more extreme than the current skew
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        // Update the skew value if the new skew is more extreme
        proxy.skew = skew;
        // Animate the skew effect back to 0 smoothly
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew), // Apply the skew value to items
        });
      }
    },
  });
}

// Initialize all effects
initScroll();
applySkewEffect();
