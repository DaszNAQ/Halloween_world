// Decorative creatures are real image assets from the supplied collection.
// CSS only animates the images; it does not draw replacement illustrations.
const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)").matches;
const CREATURE_ASSETS = [
  { type: "bat", src: "menacing-bat-in-flight.webp", alt: "A bat flying through the shadows" },
  { type: "ghost", src: "nightlight-02-ghost-lantern.webp", alt: "A floating ghost lantern" },
  { type: "bat", src: "inverted-bronze-eyed-bat.webp", alt: "A bronze-eyed bat drifting by" },
  { type: "ghost", src: "nightlight-03-purple-ghost-orb.webp", alt: "A spectral purple ghost light" },
  { type: "bat", src: "menacing-winged-bat-creature.webp", alt: "A winged creature in flight" },
  { type: "ghost", src: "20261026-1505-image.webp", alt: "A pale, eerie mask floating in the night" },
  { type: "bat", src: "menacing-bat-in-flight.webp", alt: "A shadow bat in flight" },
  { type: "ghost", src: "nightlight-02-ghost-lantern.webp", alt: "A wandering ghost lantern" },
  { type: "bat", src: "inverted-bronze-eyed-bat.webp", alt: "A bat passing overhead" },
  { type: "ghost", src: "nightlight-03-purple-ghost-orb.webp", alt: "A purple phantom light" }
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
    image.draggable = false;
    image.title = "";
    sprite.append(image);
    layer.append(sprite);
  });
  if (REDUCED_MOTION) layer.classList.add("reduced-motion");
}

export function initFx() {
  addBackgroundCreatures();
}
