gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".parallax-wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

tl.to(".parallax-image", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none"
});