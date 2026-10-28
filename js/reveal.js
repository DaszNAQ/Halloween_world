// Reveal content as it enters the viewport. The `translate` property avoids conflicts with 3D tilt transforms.
export function initReveal() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(".category-card,.about-night,.party-panel,.feature-card,.learn-card,.game-card");
  document.documentElement.classList.add("js-reveal");
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(e => { e.classList.add("rv"); io.observe(e); });
}
