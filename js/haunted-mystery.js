const clues = [
  { name: "The Grand Hall", image: "candle-03-ivory-rune.webp", text: "The clock stopped at 12:03. A streak in the dust beside the display case suggests someone opened it recently." },
  { name: "The East Corridor", image: "grave-marker-celtic-cross.webp", text: "Small silver-dusted footprints lead from the hall toward the music room, but there are no prints going back." },
  { name: "The Music Room", image: "candle-02-crimson-skull.webp", text: "A blue thread is caught near the piano pedal. A note on the stand reads: “The third melody opens the way to moonlight.”" },
  { name: "The Balcony", image: "spider-web-02-corner-wood.webp", text: "The balcony door is locked from the inside. Dust on the railing is undisturbed, so nobody used this route." }
];
const suspects = [
  { name: "Mina — apprentice witch", image: "witch-hat-01-plum-bow.webp", correct: false, explanation: "Mina has blue thread on her robe, but she was in the potion room when the pendant vanished. The thread makes her suspicious, but it is not enough to convict her." },
  { name: "Pip — ghost musician", image: "nightlight-02-ghost-lantern.webp", correct: true, explanation: "Pip left the silver-dusted footprints and a blue thread from his performance scarf. He borrowed the pendant as a prism for a moon melody and hid it in the piano — a foolish prank, not a real theft." },
  { name: "Ink — the black cat", image: "black-cat-crouching-with-golden-eyes.webp", correct: false, explanation: "Ink often naps by the window, but the balcony dust is untouched. The cat could not have crossed the corridor that way." }
];

export function showMystery(container) {
  let found = new Set();
  let score = 0;

  function intro() {
    found = new Set();
    score = 0;
    container.innerHTML = `<p class="eyebrow">CASE FILE 013 · MIDNIGHT HOLLOW</p><h2 id="modal-title">The Silver Moon Pendant</h2><p>On Halloween night, the castle’s most precious pendant vanished from its display case just before midnight. Three guests each have a secret. Explore the rooms, gather clues, and make your deduction.</p><img class="result-symbol-image" src="assets/collection/skull-cracked-01.webp" alt="A mysterious relic" loading="lazy"><p class="clue-note">Your mission: investigate at least three locations before accusing a suspect.</p><button class="button button-primary" id="mystery-start" type="button">Begin the investigation ↗</button>`;
    container.querySelector("#mystery-start").addEventListener("click", renderLocations);
  }

  function renderLocations() {
    container.innerHTML = `<p class="eyebrow">INVESTIGATION</p><h2 id="modal-title">Explore the castle</h2><p>Select a location to inspect the evidence. Clues found: <strong>${found.size}/4</strong></p><div class="progress-track"><span style="width:${found.size / 4 * 100}%"></span></div><div class="clue-grid">${clues.map((clue, index) => `<button class="clue-card" data-clue="${index}" type="button" ${found.has(index) ? "disabled" : ""}><img class="clue-image" src="assets/collection/${clue.image}" alt="" loading="lazy"><strong>${clue.name}</strong><small>${found.has(index) ? "Investigated" : "Inspect location"}</small></button>`).join("")}</div><div id="clue-note" class="clue-note">${found.size >= 3 ? "You have enough clues to make a deduction. Keep exploring or choose a suspect." : "Investigate at least three locations to unlock the final deduction."}</div><button class="button button-primary" id="mystery-accuse" type="button" ${found.size < 3 ? "disabled" : ""}>Choose a suspect ↗</button>`;
    container.querySelectorAll("[data-clue]").forEach(button => button.addEventListener("click", () => {
      const index = Number(button.dataset.clue);
      found.add(index);
      score += 10;
      const noteText = clues[index].text;
      renderLocations();
      container.querySelector("#clue-note").textContent = noteText;
    }));
    container.querySelector("#mystery-accuse").addEventListener("click", renderSuspects);
  }

  function renderSuspects() {
    container.innerHTML = `<p class="eyebrow">THE FINAL DEDUCTION</p><h2 id="modal-title">Who took the pendant?</h2><p>Use the evidence you collected: silver dust, a blue thread, and the untouched balcony door.</p><div class="choice-list">${suspects.map((suspect, index) => `<button class="choice-button" data-suspect="${index}" type="button"><img class="suspect-image" src="assets/collection/${suspect.image}" alt="" loading="lazy"><span>${suspect.name}</span></button>`).join("")}</div>`;
    container.querySelectorAll("[data-suspect]").forEach(button => button.addEventListener("click", () => renderResult(Number(button.dataset.suspect))));
  }

  function renderResult(index) {
    const suspect = suspects[index];
    const correct = suspect.correct;
    if (correct) score += 30;
    container.innerHTML = `<div class="result-panel"><img class="result-symbol-image" src="assets/collection/${correct ? "cauldron-purple-magic.webp" : "candle-03-ivory-rune.webp"}" alt="${correct ? "Case solved" : "A clue"}" loading="lazy"><p class="eyebrow">CASE CLOSED</p><h2 id="modal-title">${correct ? "Case solved!" : "An incorrect deduction"}</h2><p><strong>${suspect.name}</strong></p><p>${suspect.explanation}</p><p>Investigation score: <strong>${score}</strong> / 70</p><button class="button button-primary" id="mystery-replay" type="button">Play again ↻</button></div>`;
    container.querySelector("#mystery-replay").addEventListener("click", intro);
  }

  intro();
}
