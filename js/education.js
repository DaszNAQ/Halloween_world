const vocabulary = [
  ["Pumpkin", "A large orange squash", "The pumpkin is glowing."],
  ["Ghost", "A spirit of the dead", "A friendly ghost lives here."],
  ["Witch", "A person associated with magic", "The witch has a purple hat."],
  ["Haunted house", "A house believed to contain ghosts", "We explored a haunted house."],
  ["Bat", "A flying nocturnal mammal", "A bat flew across the moon."],
  ["Candle", "A wax light with a wick", "Light a candle carefully."],
  ["Cauldron", "A large pot used for brewing", "The potion is in the cauldron."],
  ["Skeleton", "The framework of bones in a body", "The skeleton is dancing."],
  ["Spell", "Words believed to have magical power", "She learned a new spell."],
  ["Costume", "Clothing worn to look like someone else", "His costume looks spooky."],
  ["Spider web", "A web spun by a spider", "There is a spider web in the corner."],
  ["Trick-or-treat", "A Halloween custom of asking for candy", "Children go trick-or-treating."]
];

const questions = [
  { q: "On what date is Halloween celebrated?", a: ["October 30", "October 31", "November 1"], correct: 1, why: "Halloween is celebrated on October 31, the eve of All Saints’ Day." },
  { q: "Which ancient people are associated with Samhain?", a: ["The Celts", "The Aztecs", "The Vikings"], correct: 0, why: "Samhain was an ancient seasonal festival associated with Celtic communities." },
  { q: "Which regions are most closely associated with the Celtic Samhain tradition?", a: ["Egypt", "Ireland and Scotland", "Japan"], correct: 1, why: "Historical accounts connect Samhain with Celtic traditions in Ireland and Scotland." },
  { q: "The word “Halloween” is shortened from which phrase?", a: ["Hollow Evening", "All Hallows’ Eve", "Hall of Wine"], correct: 1, why: "All Hallows’ Eve is the evening before All Saints’ Day." },
  { q: "What were early Irish jack-o’-lanterns carved from?", a: ["Turnips", "Watermelons", "Carrots"], correct: 0, why: "Turnips were used in Ireland before pumpkins became popular in North America." },
  { q: "What was one traditional reason for wearing disguises?", a: ["To enter a beauty contest", "To ward off spirits", "To sell goods"], correct: 1, why: "Some traditions held that disguises could hide people from or confuse spirits." },
  { q: "Who is “Stingy Jack” in Irish folklore?", a: ["A knight", "A man who tricked the Devil", "A witch"], correct: 1, why: "In the legend, Jack tricks the Devil and is left wandering with a lantern." },
  { q: "Día de los Muertos (November 1–2) is primarily associated with which country?", a: ["Mexico", "The Netherlands", "South Korea"], correct: 0, why: "Día de los Muertos is a Mexican tradition honoring deceased loved ones and is distinct from Halloween." },
  { q: "What does the word “pumpkin” refer to?", a: ["A pumpkin", "A broom", "A bat"], correct: 0, why: "A pumpkin is a large, usually orange squash often carved for Halloween." },
  { q: "What is a “haunted house”?", a: ["A greenhouse", "A house believed to contain ghosts", "A candy shop"], correct: 1, why: "A haunted house is a place believed to be visited by ghosts or spirits." },
  { q: "What is a Halloween “costume”?", a: ["A sweet", "An outfit or disguise", "A curse"], correct: 1, why: "A costume is clothing worn to represent a character, creature, or other identity." },
  { q: "What activity is associated with “trick-or-treat”?", a: ["Children asking for candy", "Releasing sky lanterns", "Giving away pine trees"], correct: 0, why: "Children visit homes to ask for treats, traditionally with the playful phrase “trick or treat.”" }
];

export function initEducation(toast) {
  const list = document.querySelector("#vocab-list");
  const search = document.querySelector("#vocab-search");
  const count = document.querySelector("#vocab-count");
  const empty = document.querySelector("#vocab-empty");
  const rows = [];

  vocabulary.forEach(([word, definition, example]) => {
    const row = document.createElement("article");
    row.className = "vocab-row";
    row.dataset.search = `${word} ${definition} ${example}`.toLocaleLowerCase("en");
    const info = document.createElement("div");
    info.className = "vocab-info";
    const wordEl = document.createElement("strong");
    wordEl.textContent = word;
    const definitionEl = document.createElement("span");
    definitionEl.className = "vocab-meaning";
    definitionEl.textContent = definition;
    const exampleEl = document.createElement("p");
    exampleEl.className = "vocab-example";
    exampleEl.textContent = example;
    info.append(wordEl, definitionEl, exampleEl);
    row.append(info);
    list.append(row);
    rows.push(row);
  });

  function filterVocabulary() {
    const query = (search?.value || "").trim().toLocaleLowerCase("en");
    let visible = 0;
    rows.forEach(row => {
      const matches = !query || row.dataset.search.includes(query);
      row.hidden = !matches;
      if (matches) visible++;
    });
    if (count) count.textContent = `${visible} of ${vocabulary.length} words`;
    if (empty) empty.hidden = visible !== 0;
  }
  search?.addEventListener("input", filterVocabulary);
  filterVocabulary();

  document.querySelector("#origins-more")?.addEventListener("click", () => {
    const extra = document.querySelector("#origins-extra");
    extra.hidden = !extra.hidden;
    const button = document.querySelector("#origins-more");
    button.textContent = extra.hidden ? "Read the history notes ↗" : "Collapse the notes ↑";
    button.setAttribute("aria-expanded", String(!extra.hidden));
  });

  const questionCount = questions.length;
  let index = 0;
  let score = 0;
  let answered = false;
  const intro = document.querySelector("#quiz-intro");
  const stage = document.querySelector("#quiz-stage");

  function startQuiz() {
    index = 0;
    score = 0;
    answered = false;
    intro.hidden = true;
    stage.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const question = questions[index];
    stage.innerHTML = `<div class="quiz-status"><p class="eyebrow">QUESTION ${index + 1}/${questionCount}</p><span class="quiz-live-score">Score: ${score}</span></div><div class="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${questionCount}" aria-valuenow="${index}"><span style="width:${index / questionCount * 100}%"></span></div><h4 class="quiz-question">${question.q}</h4><div class="quiz-options">${question.a.map((answer, i) => `<button class="quiz-option" data-answer="${i}" type="button"><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${answer}</span></button>`).join("")}</div><div id="quiz-feedback" aria-live="polite"></div>`;
    stage.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer))));
  }

  function answerQuestion(choice) {
    if (answered) return;
    answered = true;
    const question = questions[index];
    const isCorrect = choice === question.correct;
    if (isCorrect) score++;

    stage.querySelectorAll("[data-answer]").forEach((button, i) => {
      button.disabled = true;
      if (i === question.correct) button.classList.add("correct");
      else if (i === choice) button.classList.add("wrong");
    });

    const feedback = stage.querySelector("#quiz-feedback");
    feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    const message = document.createElement("p");
    message.textContent = `${isCorrect ? "Correct!" : "Not quite."} ${question.why}`;
    const next = document.createElement("button");
    next.type = "button";
    next.className = "button button-primary";
    next.style.marginTop = "12px";
    next.textContent = index === questionCount - 1 ? "View your results" : "Next question →";
    next.addEventListener("click", () => { index++; index < questionCount ? renderQuestion() : showResults(); });
    feedback.replaceChildren(message, next);
  }

  function showResults() {
    const percent = Math.round(score / questionCount * 100);
    const level = score >= 9 ? "Halloween Historian" : score >= 6 ? "Curious Explorer" : "Rookie Apprentice";
    const description = score >= 9
      ? "Splendid work! You know plenty of fascinating details about Halloween history and customs."
      : score >= 6
        ? "You have a good foundation. Review the questions you missed, then try again."
        : "Every secret is worth discovering. Read the history notes and give the challenge another try.";
    const art = score >= 9 ? "assets/collection/cauldron-purple-magic.webp" : score >= 6 ? "assets/collection/candle-03-ivory-rune.webp" : "assets/collection/skull-cracked-01.webp";
    stage.innerHTML = `<div class="result-panel"><img class="result-art" src="${art}" alt="A Gothic Halloween relic" loading="lazy"><p class="eyebrow">ACADEMY · COMPLETE</p><p class="result-percent">${percent}%</p><h3>${score}/${questionCount} correct</h3><p class="result-level">${level}</p><p>${description}</p><div class="result-actions"><button class="button button-primary" id="quiz-retry" type="button">Try again ↻</button><button class="button button-ghost" id="quiz-review" type="button">Review the lesson</button></div></div>`;
    stage.querySelector("#quiz-retry").addEventListener("click", startQuiz);
    stage.querySelector("#quiz-review").addEventListener("click", () => {
      intro.hidden = false;
      stage.hidden = true;
      document.querySelector("#quiz-intro").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    });
  }

  document.querySelector("#start-quiz").addEventListener("click", startQuiz);
}
