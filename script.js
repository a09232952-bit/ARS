(function () {
  "use strict";

  const TIME_PER_QUESTION = 30; // secondes
  const RING_LEN = 2 * Math.PI * 28;

  const $ = (id) => document.getElementById(id);
  const screens = { setup: $("screen-setup"), quiz: $("screen-quiz"), result: $("screen-result") };

  // ----- État -----
  let selectedChapters = new Set(Object.keys(CHAPTERS).map(Number));
  let config = { count: 20, shuffle: true };
  let quiz = [];          // questions du quiz en cours
  let current = 0;
  let score = 0;
  let answers = [];       // {question, options, chosen, correctIndex, status, time}
  let timerId = null;
  let startTs = 0;
  let locked = false;

  // ----- Utilitaires -----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function show(name) {
    Object.entries(screens).forEach(([k, el]) => (el.hidden = k !== name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function pool() {
    return QUESTIONS.filter((x) => selectedChapters.has(x.ch));
  }

  // ----- Écran de configuration -----
  function buildChapters() {
    const box = $("chapter-list");
    box.innerHTML = "";
    Object.entries(CHAPTERS).forEach(([id, label]) => {
      const n = QUESTIONS.filter((x) => x.ch === Number(id)).length;
      const row = document.createElement("label");
      row.className = "chapter-item";
      row.innerHTML = `<input type="checkbox" value="${id}" checked> <span>${label}</span><span class="count">${n} questions</span>`;
      row.querySelector("input").addEventListener("change", (e) => {
        const v = Number(e.target.value);
        e.target.checked ? selectedChapters.add(v) : selectedChapters.delete(v);
        refreshCount();
      });
      box.appendChild(row);
    });
  }

  function setCount(v) {
    const max = pool().length || 1;
    v = Math.max(1, Math.min(max, Math.round(Number(v) || 1)));
    config.count = v;
    $("nb-range").value = v;
    $("nb-number").value = v;
    $("nb-value").textContent = v;
    const total = v * TIME_PER_QUESTION;
    $("setup-estimate").textContent =
      `Durée maximale : ${Math.floor(total / 60)} min ${total % 60 ? (total % 60) + " s" : ""}`.trim();
  }

  function refreshCount() {
    const max = pool().length;
    $("nb-range").max = Math.max(1, max);
    $("nb-number").max = Math.max(1, max);
    $("nb-max").textContent = `(maximum : ${max})`;
    setCount(Math.min(config.count, Math.max(1, max)));
    $("btn-start").disabled = max === 0;
    const err = $("setup-error");
    err.hidden = max !== 0;
    err.textContent = max === 0 ? "Sélectionnez au moins un chapitre." : "";
  }

  $("nb-range").addEventListener("input", (e) => setCount(e.target.value));
  $("nb-number").addEventListener("input", (e) => setCount(e.target.value));
  $("btn-max").addEventListener("click", () => setCount(pool().length));
  $("btn-10").addEventListener("click", () => setCount(10));
  $("btn-20").addEventListener("click", () => setCount(20));
  $("btn-50").addEventListener("click", () => setCount(50));
  $("opt-shuffle").addEventListener("change", (e) => (config.shuffle = e.target.checked));

  // ----- Démarrage -----
  function startQuiz() {
    const p = pool();
    if (!p.length) return;
    const base = config.shuffle ? shuffle(p) : p.slice();
    quiz = base.slice(0, Math.min(config.count, base.length));
    current = 0;
    score = 0;
    answers = [];
    $("q-total").textContent = quiz.length;
    $("live-score").textContent = "0";
    show("quiz");
    renderQuestion();
  }

  // ----- Question -----
  function renderQuestion() {
    const item = quiz[current];
    locked = false;

    let options = [item.good, ...item.bad].map((text, i) => ({ text, ok: i === 0 }));
    if (config.shuffle) options = shuffle(options);
    item._options = options;

    $("q-index").textContent = current + 1;
    $("q-chapter").textContent = CHAPTERS[item.ch];
    $("q-text").textContent = item.text;
    $("progress-fill").style.width = (current / quiz.length) * 100 + "%";
    $("feedback").hidden = true;
    $("feedback").className = "feedback";
    $("btn-next").hidden = true;

    const box = $("answers");
    box.innerHTML = "";
    options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "answer";
      b.innerHTML = `<span class="letter">${"ABCD"[i]}</span><span></span>`;
      b.lastChild.textContent = opt.text;
      b.addEventListener("click", () => choose(i));
      box.appendChild(b);
    });

    startTimer();
  }

  // ----- Minuteur -----
  function startTimer() {
    stopTimer();
    startTs = performance.now();
    updateTimer(TIME_PER_QUESTION);
    timerId = setInterval(() => {
      const elapsed = (performance.now() - startTs) / 1000;
      const left = Math.max(0, TIME_PER_QUESTION - elapsed);
      updateTimer(left);
      if (left <= 0) {
        stopTimer();
        timeUp();
      }
    }, 100);
  }
  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }
  function updateTimer(left) {
    $("timer-text").textContent = Math.ceil(left);
    const ratio = left / TIME_PER_QUESTION;
    const ring = $("ring");
    ring.style.strokeDasharray = RING_LEN;
    ring.style.strokeDashoffset = RING_LEN * (1 - ratio);
    const t = $("timer");
    t.classList.toggle("warn", left <= 10 && left > 5);
    t.classList.toggle("danger", left <= 5);
  }

  // ----- Réponses -----
  function reveal(chosenIndex, status) {
    const item = quiz[current];
    const opts = item._options;
    const correctIndex = opts.findIndex((o) => o.ok);
    const buttons = [...$("answers").children];
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === correctIndex) b.classList.add("correct");
      else if (i === chosenIndex) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    const fb = $("feedback");
    fb.hidden = false;
    fb.classList.add(status === "ok" ? "ok" : "ko");
    $("feedback-title").textContent =
      status === "ok" ? "✅ Bonne réponse !" : status === "timeout" ? "⏱ Temps écoulé !" : "❌ Mauvaise réponse";
    $("feedback-expl").textContent = item.expl || "";

    const nextBtn = $("btn-next");
    nextBtn.hidden = false;
    nextBtn.textContent = current === quiz.length - 1 ? "Voir les résultats ▶" : "Suivante ▶";
    nextBtn.focus();
  }

  function choose(i) {
    if (locked) return;
    locked = true;
    stopTimer();
    const spent = Math.min(TIME_PER_QUESTION, (performance.now() - startTs) / 1000);
    const item = quiz[current];
    const ok = item._options[i].ok;
    if (ok) {
      score++;
      $("live-score").textContent = score;
    }
    answers.push({
      item,
      chosenText: item._options[i].text,
      status: ok ? "ok" : "wrong",
      time: spent
    });
    reveal(i, ok ? "ok" : "wrong");
  }

  function timeUp() {
    if (locked) return;
    locked = true;
    const item = quiz[current];
    answers.push({ item, chosenText: null, status: "timeout", time: TIME_PER_QUESTION });
    reveal(-1, "timeout");
  }

  function next() {
    if (!locked) return;
    if (current < quiz.length - 1) {
      current++;
      renderQuestion();
    } else {
      showResults();
    }
  }

  // ----- Résultats -----
  function showResults() {
    stopTimer();
    $("progress-fill").style.width = "100%";
    const total = answers.length;
    const pct = total ? Math.round((score / total) * 100) : 0;
    const wrong = answers.filter((a) => a.status === "wrong").length;
    const timeout = answers.filter((a) => a.status === "timeout").length;
    const avg = total ? (answers.reduce((s, a) => s + a.time, 0) / total).toFixed(1) : "0";

    $("res-percent").textContent = pct;
    document.querySelector(".big-score").style.setProperty("--pct", pct + "%");
    $("res-correct").textContent = score;
    $("res-total").textContent = total;
    $("res-wrong").textContent = wrong;
    $("res-timeout").textContent = timeout;
    $("res-avg").textContent = avg;

    let msg = "Continuez à réviser 📚";
    if (pct >= 90) msg = "Excellent, expert réseau ! 🏆";
    else if (pct >= 75) msg = "Très bien ! 👏";
    else if (pct >= 60) msg = "Bien, encore un petit effort 👍";
    else if (pct >= 40) msg = "Passable : relisez les chapitres 📖";
    $("res-message").textContent = msg;

    // Par chapitre
    const byCh = {};
    answers.forEach((a) => {
      const c = a.item.ch;
      byCh[c] = byCh[c] || { ok: 0, n: 0 };
      byCh[c].n++;
      if (a.status === "ok") byCh[c].ok++;
    });
    const chBox = $("res-chapters");
    chBox.innerHTML = "";
    Object.keys(byCh).sort().forEach((c) => {
      const { ok, n } = byCh[c];
      const p = Math.round((ok / n) * 100);
      const row = document.createElement("div");
      row.className = "res-ch";
      row.innerHTML = `<span>${CHAPTERS[c]}</span><strong>${ok}/${n} (${p}%)</strong>
        <div class="bar"><div class="bar-fill" style="width:${p}%"></div></div>`;
      chBox.appendChild(row);
    });

    // Revue des erreurs
    const rev = $("res-review");
    rev.innerHTML = "";
    const errors = answers.filter((a) => a.status !== "ok");
    if (!errors.length) {
      rev.innerHTML = '<p class="muted">Aucune erreur, bravo ! 🎉</p>';
    } else {
      errors.forEach((a) => {
        const d = document.createElement("div");
        d.className = "review-item";
        const you = a.status === "timeout" ? "⏱ Pas de réponse (temps écoulé)" : "Votre réponse : " + a.chosenText;
        d.innerHTML = `<p class="rq"></p><p class="you"></p><p class="right"></p><p class="expl"></p>`;
        d.querySelector(".rq").textContent = a.item.text;
        d.querySelector(".you").textContent = you;
        d.querySelector(".right").textContent = "Bonne réponse : " + a.item.good;
        d.querySelector(".expl").textContent = a.item.expl || "";
        rev.appendChild(d);
      });
    }

    show("result");
  }

  // ----- Événements -----
  $("btn-start").addEventListener("click", startQuiz);
  $("btn-next").addEventListener("click", next);
  $("btn-quit").addEventListener("click", () => {
    if (confirm("Abandonner le quiz en cours ?")) {
      stopTimer();
      show("setup");
    }
  });
  $("btn-replay").addEventListener("click", startQuiz);
  $("btn-newquiz").addEventListener("click", () => show("setup"));

  document.addEventListener("keydown", (e) => {
    if (screens.quiz.hidden) return;
    const key = e.key.toLowerCase();
    if (!locked) {
      const map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
      if (key in map && map[key] < $("answers").children.length) choose(map[key]);
    } else if (key === "enter" || key === " ") {
      e.preventDefault();
      next();
    }
  });

  // Mise en pause du chrono si l'onglet est caché : on ne triche pas, le temps continue (basé sur performance.now).

  // ----- Init -----
  buildChapters();
  config.count = Math.min(20, QUESTIONS.length);
  refreshCount();
})();
