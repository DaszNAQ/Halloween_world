// Decorative creatures are real image assets from the supplied collection.
// CSS only animates the images; it does not draw replacement illustrations.
const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)").matches;
const CREATURE_ASSETS = [
  { type: "bat", src: "menacing-bat-in-flight.webp" },
  { type: "ghost", src: "nightlight-02-ghost-lantern.webp" },
  { type: "bat", src: "menacing-bat-in-flight.webp" },
  { type: "ghost", src: "nightlight-03-purple-ghost-orb.webp" },
  { type: "bat", src: "menacing-winged-bat-creature.webp" },
  { type: "ghost", src: "nightlight-02-ghost-lantern.webp" }
];

function addBackgroundCreatures() {
  const layer = document.querySelector("#bg-fx");
  if (!layer || layer.dataset.ready === "true") return;
  layer.dataset.ready = "true";

  CREATURE_ASSETS.forEach((creature, index) => {
    const sprite = document.createElement("span");
    sprite.className = `bg-creature bg-creature--${creature.type}${index % 3 === 1 ? " is-reversed" : ""}`;
    sprite.setAttribute("aria-hidden", "true");
    sprite.style.setProperty("--creature-top", `${7 + (index * 17) % 83}%`);
    sprite.style.setProperty("--creature-size", `${creature.type === "bat" ? 54 + (index % 3) * 13 : 43 + (index % 3) * 12}px`);
    sprite.style.setProperty("--creature-opacity", creature.type === "bat" ? ".24" : ".20");
    sprite.style.setProperty("--creature-duration", `${38 + index * 4}s`);
    sprite.style.setProperty("--creature-delay", `${-index * 5}s`);

    const image = document.createElement("img");
    image.src = `assets/collection/${creature.src}`;
    image.alt = "";
    image.decoding = "async";
    image.fetchPriority = "low";
    image.draggable = false;
    sprite.append(image);
    layer.append(sprite);
  });
  if (REDUCED_MOTION) layer.classList.add("reduced-motion");
}

export function initFx() {
  if (REDUCED_MOTION) return;
  const start = () => addBackgroundCreatures();
  if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 1800 });
  else window.setTimeout(start, 500);
}
