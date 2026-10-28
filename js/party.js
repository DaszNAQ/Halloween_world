// The party effect uses only image assets supplied in the collection.
export function initParty(toast) {
  const button = document.querySelector("#start-party");
  if (!button) return;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const assets = [
    "pumpkin-01-classic.webp",
    "nightlight-02-ghost-lantern.webp",
    "menacing-bat-in-flight.webp",
    "skull-cracked-01.webp",
    "witch-hat-01-plum-bow.webp"
  ];
  button.addEventListener("click", () => {
    toast("The party has begun. Have a gloriously spooky night!");
    if (reducedMotion) return;
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti confetti-image";
      piece.setAttribute("aria-hidden", "true");
      const image = document.createElement("img");
      image.src = `assets/collection/${assets[i % assets.length]}`;
      image.alt = "";
      image.decoding = "async";
      piece.append(image);
      piece.style.cssText = `left:${Math.random() * 100}vw;animation-duration:${3 + Math.random() * 3}s;animation-delay:${Math.random() * 1.2}s;--confetti-size:${24 + Math.random() * 26}px`;
      piece.addEventListener("animationend", () => piece.remove());
      document.body.append(piece);
    }
  });
}
