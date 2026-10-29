const files = [
  "20261026-1505-image-1.webp", "20261026-1505-image-2.webp", "20261026-1505-image.webp",
  "black-cat-crouching-with-golden-eyes.webp", "black-cat-regal-with-golden-eyes.webp",
  "broomstick-01-ancient-copper.webp", "broomstick-02-plum-ribbon.webp", "broomstick-03-crescent-charm.webp",
  "candle-01-black-gothic.webp", "candle-02-crimson-skull.webp", "candle-03-ivory-rune.webp",
  "candy-bag-01-orange-pumpkin.webp", "candy-bag-02-dark-wood-pumpkin.webp", "candy-bag-03-black-purple-pumpkin.webp",
  "candy-bag-04-trick-or-treat-sack.webp", "candy-bag-05-rustic-orange-pumpkin.webp",
  "cape-01-black-orange.webp", "cape-02-crimson.webp", "cape-03-gray-tattered.webp", "cape-04-black-rust.webp",
  "cauldron-fire-lava.webp", "cauldron-green-potion.webp", "cauldron-purple-magic.webp", "cauldron-skull-slime.webp",
  "ghost-coffin-closed-gothic.webp", "ghost-coffin-laying-cross-separated.webp", "ghost-coffin-laying-skull-separated.webp",
  "ghost-coffin-open-skeleton.webp", "grave-marker-celtic-cross.webp", "inverted-bronze-eyed-bat.webp",
  "menacing-bat-in-flight.webp", "menacing-winged-bat-creature.webp", "nightlight-01-pumpkin-lantern.webp",
  "nightlight-02-ghost-lantern.webp", "nightlight-03-purple-ghost-orb.webp", "pumpkin-01-classic.webp",
  "pumpkin-02-witch.webp", "pumpkin-03-tall-flame.webp", "skeleton-lotus-pose.webp", "skeleton-seated-stone.webp",
  "skeleton-slouched-pose.webp", "skull-aged-02.webp", "skull-cracked-01.webp", "spider-01-large-red-markings.webp",
  "spider-02-compact-red-eyes.webp", "spider-03-armored-red-back.webp", "spider-web-01-orb.webp",
  "spider-web-02-corner-wood.webp", "spider-web-03-torn-triangle.webp", "tombstone-cross-rip.webp",
  "tombstone-skull-rip.webp", "witch-hat-01-plum-bow.webp", "witch-hat-02-star-stitch.webp",
  "witch-hat-03-celestial-belt.webp"
];

function titleFor(index) {
  return `Recovered item ${String(index + 1).padStart(2, "0")}`;
}

export function initArchive() {
  const details = document.querySelector("#artifact-archive");
  const grid = document.querySelector("#artifact-grid");
  const more = document.querySelector("#artifact-more");
  if (!details || !grid || !more) return;

  let next = 0;
  const batchSize = 12;
  const loadBatch = () => {
    const fragment = document.createDocumentFragment();
    const end = Math.min(next + batchSize, files.length);
    for (; next < end; next++) {
      const file = files[next];
      const name = titleFor(next);
      const card = document.createElement("figure");
      card.className = "artifact-card";
      const image = document.createElement("img");
      image.src = `assets/collection/${file}`;
      image.alt = name;
      image.loading = "lazy";
      image.decoding = "async";
      const caption = document.createElement("figcaption");
      caption.innerHTML = `<span>RECORD ${String(next + 1).padStart(2, "0")}</span><strong></strong>`;
      caption.querySelector("strong").textContent = name;
      card.append(image, caption);
      fragment.append(card);
    }
    grid.append(fragment);
    more.hidden = next >= files.length;
  };

  details.addEventListener("toggle", () => {
    if (details.open && next === 0) loadBatch();
  });
  more.addEventListener("click", loadBatch);
}
