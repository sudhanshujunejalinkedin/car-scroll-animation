// 1. Initialize Lenis for buttery smooth momentum scrolling
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.9,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

// 2. Main Scroll-Linked Timeline
const masterTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top top",
    end: "+=2400",       // Defines how long user scrolls
    scrub: 1,            // Smooth catch-up delay
    pin: true,
    anticipatePin: 1
  }
});

// Move car & reveal strip together
masterTl
  .to("#carWrapper", { left: "105%", ease: "none", duration: 10 }, 0)
  .to("#greenStrip", { width: "105%", ease: "none", duration: 10 }, 0);

// Sequenced Card animations triggered as car drives forward
masterTl
  .to("#card1", { opacity: 1, y: -10, duration: 1.2, ease: "power2.out" }, 2.0)
  .to("#card3", { opacity: 1, y: -10, duration: 1.2, ease: "power2.out" }, 3.5)
  .to("#card2", { opacity: 1, y: -10, duration: 1.2, ease: "power2.out" }, 5.5)
  .to("#card4", { opacity: 1, y: -10, duration: 1.2, ease: "power2.out" }, 7.0);