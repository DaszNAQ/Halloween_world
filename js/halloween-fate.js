const questions = [
  { q: "On Halloween night, where would you begin your adventure?", answers: [["A glowing pumpkin patch", "pumpkin"], ["A magic tower on the hill", "witch"], ["A foggy, moonlit road", "ghost"], ["A rooftop where black cats watch the moon", "cat"]] },
  { q: "Which enchanted item would you carry?", answers: [["A carved pumpkin lantern", "pumpkin"], ["An ancient spellbook", "witch"], ["A bell that calls wandering spirits", "ghost"], ["A claw-shaped pendant", "cat"]] },
  { q: "You hear a strange noise. What do you do?", answers: [["Check whether a pumpkin has gone missing", "pumpkin"], ["Cast a protective spell", "witch"], ["Quietly follow the sound", "ghost"], ["Watch safely from a high place", "cat"]] },
  { q: "What would be your ideal Halloween gift?", answers: [["Magical pumpkin seeds", "pumpkin"], ["A potion-making kit", "witch"], ["An old book of ghost stories", "ghost"], ["A sleek black cape", "cat"]] },
  { q: "What would you like to be remembered for?", answers: [["Always protecting your friends", "pumpkin"], ["Creativity and wisdom", "witch"], ["Freedom and unpredictability", "ghost"], ["Independence and elegance", "cat"]] }
];

const outcomes = {
  pumpkin: { name: "Pumpkin Guardian", image: "assets/collection/pumpkin-01-classic.webp", description: "You are warm, dependable, and able to brighten even the darkest room. Your true power is kindness and quiet determination." },
  witch: { name: "Midnight Witch", image: "assets/collection/witch-hat-01-plum-bow.webp", description: "Curiosity and imagination are your magic. You love finding answers and turning unusual ideas into something extraordinary." },
  ghost: { name: "Ghost Wanderer", image: "assets/collection/nightlight-02-ghost-lantern.webp", description: "You value freedom, trust your instincts, and never shy away from the unknown. Every journey holds a secret meant just for you." },
  cat: { name: "Black Cat Spirit", image: "assets/collection/black-cat-crouching-with-golden-eyes.webp", description: "Independent, observant, and refined, you notice details others miss. A touch of mystery makes you unforgettable." }
};

export function showFate(container) {
  let index = 0;
  let scores = { pumpkin: 0, witch: 0, ghost: 0, cat: 0 };

  function renderIntro() {
    container.innerHTML = `<p class="eyebrow">HALLOWEEN FATE</p><h2 id="modal-title">What will the midnight mirror reveal?</h2><p>Answer five playful questions to discover your Halloween archetype. This experience is for entertainment only.</p><img class="result-symbol-image" src="assets/collection/nightlight-03-purple-ghost-orb.webp" alt="A mysterious purple ghost light" loading="lazy"><button class="button button-primary" id="fate-begin" type="button">Reveal my fate ↗</button>`;
    container.querySelector("#fate-begin").addEventListener("click", renderQuestion);
  }

  function renderQuestion() {
    const question = questions[index];
    container.innerHTML = `<p class="eyebrow">HALLOWEEN FATE · QUESTION ${index + 1}/5</p><div class="progress-track"><span style="width:${index / questions.length * 100}%"></span></div><div class="game-question"><h2 id="modal-title">${question.q}</h2><div class="choice-list">${question.answers.map((answer, i) => `<button class="choice-button" data-index="${i}" type="button">${answer[0]}</button>`).join("")}</div></div>`;
    container.querySelectorAll("[data-index]").forEach(button => button.addEventListener("click", () => {
      scores[question.answers[Number(button.dataset.index)][1]]++;
      index++;
      index < questions.length ? renderQuestion() : renderResult();
    }));
  }

  function renderResult() {
    const key = Object.keys(scores).sort((a, b) => scores[b] - scores[a])[0];
    const result = outcomes[key];
    container.innerHTML = `<div class="result-panel"><img class="result-symbol-image" src="${result.image}" alt="${result.name}" loading="lazy"><p class="eyebrow">YOUR HALLOWEEN ARCHETYPE</p><h2 id="modal-title">${result.name}</h2><p>${result.description}</p><p class="muted">This result is based on your choices and is for entertainment only.</p><button class="button button-primary" id="fate-replay" type="button">Play again ↻</button></div>`;
    container.querySelector("#fate-replay").addEventListener("click", () => {
      index = 0;
      scores = { pumpkin: 0, witch: 0, ghost: 0, cat: 0 };
      renderIntro();
    });
  }

  renderIntro();
}
