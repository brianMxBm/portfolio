import { CSSPlugin, ScrollTrigger } from "gsap/all";

import gsap from "gsap";

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export const staggerReveal = (
  node1: gsap.TweenTarget,
  node2: gsap.TweenTarget
) => {
  gsap.from([node1, node2], {
    duration: 1.5,
    height: 0,
    skewY: 2,
    transformOrigin: "right top",
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const fadeIn = (node: gsap.TweenTarget) => {
  gsap.from([node], {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const staggerText = (
  node1: gsap.TweenTarget,
  node2: gsap.TweenTarget,
  node3: gsap.TweenTarget
) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut",
  });
};

export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut",
  });
};

// adds city image once you hover on
export const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top",
  });
};

// Removes the city image once you hover off
export const handleCityReturn = (target) => {
  gsap.to(target, {
    duration: 0,
    skewY: 0,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0,
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};
