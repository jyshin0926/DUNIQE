(() => {
  const TASKS = [
    {
      id: "naturalness",
      label: "Naturalness",
      lede: "QualiSpeech · MOS-style naturalness, 1–5.",
    },
    {
      id: "quality",
      label: "Audio quality",
      lede: "NISQA · MOS-style audio quality, 1–5.",
    },
    {
      id: "emotion",
      label: "Emotion",
      lede: "IEMOCAP · primary emotion and a short description.",
    },
  ];

  const els = {
    tabs: document.getElementById("tabs"),
    lede: document.getElementById("taskLede"),
    cards: document.getElementById("cards"),
  };

  let active = "naturalness";
  let data = { samples: [] };
  let currentAudio = null;

  const esc = (s) =>
    String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const fmt = (v) => (typeof v === "number" ? v.toFixed(1) : "—");
  const pct = (v) => Math.max(0, Math.min(100, (Number(v) / 5) * 100));

  const ICON_PLAY =
    '<svg class="ic-play" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l10-5.5L4 2.5z"/></svg>';
  const ICON_PAUSE =
    '<svg class="ic-pause" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h4v12H3zm6 0h4v12H9z"/></svg>';

  function scoreBlock(sample) {
    if (sample.task === "emotion") {
      return `
        <div class="scores">
          <div class="score-box">
            <div class="lbl">Human</div>
            <div class="num">${esc(sample.human_emotion || "—")}</div>
          </div>
          <div class="score-box ours">
            <div class="lbl">D-UNIQE</div>
            <div class="num">${esc(sample.model_emotion || "—")}</div>
          </div>
        </div>`;
    }
    return `
      <div class="scores">
        <div class="score-box">
          <div class="lbl">Human</div>
          <div class="num">${fmt(sample.human_score)}</div>
          <div class="meter"><span style="width:${pct(sample.human_score)}%"></span></div>
        </div>
        <div class="score-box ours">
          <div class="lbl">D-UNIQE</div>
          <div class="num">${fmt(sample.model_score)}</div>
          <div class="meter"><span style="width:${pct(sample.model_score)}%"></span></div>
        </div>
      </div>`;
  }

  function card(sample, index) {
    const wave = sample.wave || sample.audio.replace(/\.wav$/i, ".png");
    return `
      <article class="card">
        <div class="card-head">
          <p class="idx">Example ${String(index + 1).padStart(2, "0")}</p>
        </div>
        <div class="player" data-src="${esc(sample.audio)}">
          <img src="${esc(wave)}" alt="" />
          <button type="button" class="play" aria-label="Play">${ICON_PLAY}${ICON_PAUSE}</button>
          <div class="scrub"></div>
          <audio preload="auto" src="${esc(sample.audio)}"></audio>
        </div>
        ${scoreBlock(sample)}
        <div class="compare">
          <div class="col">
            <span class="lbl">Human</span>
            <p class="clamp">${esc(sample.human)}</p>
            <button type="button" class="more">Show more</button>
          </div>
          <div class="col">
            <span class="lbl">D-UNIQE</span>
            <p class="clamp">${esc(sample.model)}</p>
            <button type="button" class="more">Show more</button>
          </div>
        </div>
      </article>`;
  }

  function stopAll(except) {
    els.cards.querySelectorAll(".player").forEach((p) => {
      const a = p.querySelector("audio");
      const b = p.querySelector(".play");
      if (a !== except) {
        a.pause();
        b.setAttribute("aria-pressed", "false");
      }
    });
  }

  function bind() {
    els.cards.querySelectorAll(".player").forEach((p) => {
      const audio = p.querySelector("audio");
      const btn = p.querySelector(".play");
      const scrub = p.querySelector(".scrub");
      const toggle = () => {
        if (audio.paused) {
          stopAll(audio);
          audio.play();
          btn.setAttribute("aria-pressed", "true");
          currentAudio = audio;
        } else {
          audio.pause();
          btn.setAttribute("aria-pressed", "false");
        }
      };
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
      });
      p.addEventListener("click", (e) => {
        if (e.target.closest(".play")) return;
        const rect = p.getBoundingClientRect();
        if (audio.duration) {
          audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
        }
        if (audio.paused) toggle();
      });
      audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        scrub.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      });
      audio.addEventListener("ended", () => btn.setAttribute("aria-pressed", "false"));
    });

    els.cards.querySelectorAll(".more").forEach((btn) => {
      const p = btn.previousElementSibling;
      requestAnimationFrame(() => {
        if (p.scrollHeight <= p.clientHeight + 4) btn.hidden = true;
      });
      btn.addEventListener("click", () => {
        const open = p.classList.toggle("clamp");
        btn.textContent = open ? "Show more" : "Show less";
      });
    });
  }

  function render() {
    const meta = TASKS.find((t) => t.id === active);
    els.lede.textContent = meta.lede;
    els.tabs.querySelectorAll(".tab").forEach((btn) => {
      btn.setAttribute("aria-selected", String(btn.dataset.task === active));
    });
    const subset = data.samples.filter((s) => s.task === active);
    els.cards.innerHTML = subset.map(card).join("");
    bind();
  }

  function mountTabs() {
    els.tabs.innerHTML = TASKS.map(
      (t) =>
        `<button type="button" class="tab" role="tab" data-task="${t.id}" aria-selected="${t.id === active}">${t.label}</button>`
    ).join("");
    els.tabs.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".tab");
      if (!btn) return;
      stopAll(null);
      active = btn.dataset.task;
      render();
    });
  }

  mountTabs();
  if (!window.DEMO_DATA?.samples) {
    els.lede.textContent = "Missing samples.js";
    return;
  }
  data = window.DEMO_DATA;
  render();
})();
