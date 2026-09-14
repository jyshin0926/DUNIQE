(() => {
  const TASKS = [
    {
      id: "naturalness",
      label: "Naturalness",
      lede: "QualiSpeech excerpts. Human MOS-style naturalness ratings versus D-UNIQE.",
    },
    {
      id: "quality",
      label: "Audio quality",
      lede: "NISQA excerpts. Human audio-quality ratings versus D-UNIQE.",
    },
    {
      id: "emotion",
      label: "Emotion",
      lede: "IEMOCAP excerpts. Human emotion descriptions versus D-UNIQE.",
    },
  ];

  const els = {
    tabs: document.getElementById("tabs"),
    lede: document.getElementById("taskLede"),
    cards: document.getElementById("cards"),
  };

  let data = { samples: [] };
  let active = "naturalness";

  const fmtScore = (v) => (typeof v === "number" ? v.toFixed(1) : "—");

  function esc(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function chips(sample) {
    if (sample.task === "emotion") {
      return `
        <span class="chip">Human <strong>${esc(sample.human_emotion || "—")}</strong></span>
        <span class="chip model">D-UNIQE <strong>${esc(sample.model_emotion || "—")}</strong></span>
      `;
    }
    return `
      <span class="chip">Human <strong>${fmtScore(sample.human_score)}</strong></span>
      <span class="chip model">D-UNIQE <strong>${fmtScore(sample.model_score)}</strong></span>
    `;
  }

  function card(sample, index) {
    const title = `Example ${String(index + 1).padStart(2, "0")}`;
    return `
      <article class="card">
        <div class="card-head">
          <h2 class="card-id">${title}</h2>
          <div class="chips">${chips(sample)}</div>
        </div>
        <audio controls preload="none" src="${sample.audio}"></audio>
        <div class="compare">
          <div class="col">
            <span class="field-label">Human rating</span>
            <p>${esc(sample.human)}</p>
          </div>
          <div class="col">
            <span class="field-label">D-UNIQE</span>
            <p>${esc(sample.model)}</p>
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const meta = TASKS.find((t) => t.id === active);
    els.lede.textContent = meta.lede;
    els.tabs.querySelectorAll(".tab").forEach((btn) => {
      btn.setAttribute("aria-selected", String(btn.dataset.task === active));
    });
    const subset = data.samples.filter((s) => s.task === active);
    els.cards.innerHTML = subset.map(card).join("") || "<p class='section-lede'>No clips for this task.</p>";
  }

  function mountTabs() {
    els.tabs.innerHTML = TASKS.map(
      (t) =>
        `<button type="button" class="tab" role="tab" data-task="${t.id}" aria-selected="${t.id === active}">${t.label}</button>`
    ).join("");
    els.tabs.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".tab");
      if (!btn) return;
      active = btn.dataset.task;
      render();
    });
  }

  function init() {
    mountTabs();
    if (!window.DEMO_DATA || !Array.isArray(window.DEMO_DATA.samples)) {
      els.lede.textContent = "Missing samples.js — keep it next to index.html.";
      return;
    }
    data = window.DEMO_DATA;
    render();
  }

  init();
})();
