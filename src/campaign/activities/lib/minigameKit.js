import { MIN_STAT, MAX_STAT } from '../../../character/stats.js';

/** Normalize stat to 0..1 across MIN..MAX. */
export function statT(value) {
  return (Math.max(MIN_STAT, Math.min(MAX_STAT, value)) - MIN_STAT) / (MAX_STAT - MIN_STAT);
}

/** Average statT across multiple stats. */
export function avgStatT(character, keys) {
  const stats = character?.stats ?? {};
  const vals = keys.map(k => statT(stats[k] ?? 10));
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

/** Timing window ms from 500..900 based on stats. */
export function windowMsFor(character, keys, min = 500, max = 900) {
  const t = avgStatT(character, keys);
  return Math.round(min + t * (max - min));
}

/** Speed multiplier 0.7..1.3 from stats. */
export function speedFor(character, keys) {
  const t = avgStatT(character, keys);
  return 0.7 + t * 0.6;
}

/**
 * rAF game loop with elapsed time.
 * @param {{ onTick: (ts: number, elapsed: number, dt: number) => void, durationMs?: number, onFinish?: () => void }} opts
 */
export function createLoop({ onTick, durationMs, onFinish }) {
  let running = true;
  let start = 0;
  let last = 0;

  const stop = () => {
    if (!running) return;
    running = false;
    onFinish?.();
  };

  const tick = (ts) => {
    if (!running) return;
    if (!start) {
      start = ts;
      last = ts;
    }
    const elapsed = ts - start;
    const dt = ts - last;
    last = ts;
    if (durationMs != null && elapsed >= durationMs) {
      stop();
      return;
    }
    onTick(ts, elapsed, dt);
    if (running) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
  return { stop, isRunning: () => running };
}

/**
 * Bind keydown handler with cleanup.
 * @param {string[]} codes
 * @param {(code: string, e: KeyboardEvent) => void} handler
 */
export function bindKeys(codes, handler) {
  const onKey = (e) => {
    if (codes.includes(e.code)) {
      e.preventDefault();
      handler(e.code, e);
    }
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}

/** Build standard mini-game DOM shell. */
export function mountGame(container, { title = '', hint = '' } = {}) {
  container.innerHTML = `
    <div class="mg-scene">
      <div class="mg-title" id="mg-title">${title}</div>
      <div class="mg-main" id="mg-main"></div>
      <div class="mg-hud">
        <span id="mg-progress"></span>
        <span class="mg-flash" id="mg-flash"></span>
      </div>
      <div class="mg-meter-track"><div class="mg-meter-bar" id="mg-meter"></div></div>
      <div class="mg-hint" id="mg-hint">${hint}</div>
    </div>
  `;
  return {
    main: container.querySelector('#mg-main'),
    progress: container.querySelector('#mg-progress'),
    flash: container.querySelector('#mg-flash'),
    meter: container.querySelector('#mg-meter'),
    hint: container.querySelector('#mg-hint'),
    title: container.querySelector('#mg-title'),
    dispose: () => { container.innerHTML = ''; }
  };
}

export function setProgress(ui, current, total) {
  if (ui.progress) ui.progress.textContent = `${current} / ${total}`;
}

export function setMeter(ui, fraction) {
  if (ui.meter) ui.meter.style.width = `${Math.max(0, Math.min(1, fraction)) * 100}%`;
}

export function flashResult(ui, type) {
  if (!ui.flash) return;
  ui.flash.textContent = type === 'hit' ? 'HIT' : 'MISS';
  ui.flash.className = `mg-flash mg-flash--${type} mg-flash--show`;
  setTimeout(() => { ui.flash.className = 'mg-flash'; }, 400);
}

/**
 * QTE sequence: show prompts, player hits keys in window.
 */
export function runQTESequence(container, character, {
  prompts,
  statKeys,
  title,
  hint
}) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    let index = 0;
    let hits = 0;
    const windowMs = windowMsFor(character, statKeys);

    const advance = () => {
      ui._unbindOne?.();
      if (index >= prompts.length) {
        unbind();
        ui.dispose();
        resolve({ hits, total: prompts.length, score: hits / prompts.length });
        return;
      }
      const p = prompts[index];
      ui.main.innerHTML = `<div class="mg-prompt">${p.label}</div><div class="mg-key-hint">Press <kbd>${p.keyLabel}</kbd></div>`;
      setProgress(ui, index, prompts.length);
      let handled = false;
      const timer = setTimeout(() => {
        if (!handled) {
          flashResult(ui, 'miss');
          index++;
          setTimeout(advance, 300);
        }
      }, windowMs);

      const onHit = (code) => {
        if (handled) return;
        if (code === p.code) {
          handled = true;
          clearTimeout(timer);
          hits++;
          flashResult(ui, 'hit');
          index++;
          setTimeout(advance, 250);
        } else if (prompts.some(pr => pr.code === code)) {
          handled = true;
          clearTimeout(timer);
          flashResult(ui, 'miss');
          index++;
          setTimeout(advance, 250);
        }
      };
      const unbindOne = bindKeys(prompts.map(p => p.code), onHit);
      ui._unbindOne = unbindOne;
    };

    let unbind = () => {};
    advance();
    unbind = () => ui._unbindOne?.();
  });
}

/**
 * Click-order sequence game.
 */
export function runClickSequence(container, { items, correctOrder, timeMs, title, hint }) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    let picks = [];
    let timeLeft = timeMs;
    const shuffled = [...items].sort(() => Math.random() - 0.5);

    const render = () => {
      ui.main.innerHTML = shuffled.map((item, i) =>
        `<button type="button" class="btn btn-secondary mg-seq-btn" data-i="${i}">${item}</button>`
      ).join('');
      ui.hint.textContent = `Select in order (${picks.length}/${correctOrder.length}) · ${Math.ceil(timeLeft / 1000)}s`;
    };

    const loop = createLoop({
      durationMs: timeMs,
      onTick: (_, elapsed) => {
        timeLeft = timeMs - elapsed;
        ui.hint.textContent = `Select in order (${picks.length}/${correctOrder.length}) · ${Math.ceil(timeLeft / 1000)}s`;
      },
      onFinish: finish
    });

    function finish() {
      loop.stop();
      ui.main.removeEventListener('click', onClick);
      const correct = picks.filter((p, i) => p === correctOrder[i]).length;
      ui.dispose();
      resolve({ score: correct / correctOrder.length, correct, total: correctOrder.length });
    }

    function onClick(e) {
      const btn = e.target.closest('[data-i]');
      if (!btn) return;
      const item = shuffled[Number(btn.dataset.i)];
      picks.push(item);
      btn.disabled = true;
      setProgress(ui, picks.length, correctOrder.length);
      if (picks.length >= correctOrder.length) finish();
    }

    render();
    ui.main.addEventListener('click', onClick);
    setProgress(ui, 0, correctOrder.length);
  });
}

/**
 * Multiple choice rounds (distinct from ASVAB — used for matching/fill-in).
 */
export function runChoiceRounds(container, { rounds, title, hint }) {
  return new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    let index = 0;
    let correct = 0;

    function next() {
      if (index >= rounds.length) {
        ui.dispose();
        resolve({ score: correct / rounds.length, correct, total: rounds.length });
        return;
      }
      const r = rounds[index];
      const choices = [...r.choices].sort(() => Math.random() - 0.5);
      ui.main.innerHTML = `
        <div class="mg-prompt">${r.prompt}</div>
        <div class="mg-choices">${choices.map((c, i) =>
          `<button type="button" class="btn btn-secondary mg-choice" data-i="${choices.indexOf(c)}">${c}</button>`
        ).join('')}</div>`;
      setProgress(ui, index + 1, rounds.length);

      ui.main.onclick = (e) => {
        const btn = e.target.closest('.mg-choice');
        if (!btn) return;
        ui.main.onclick = null;
        if (Number(btn.dataset.i) === r.answer) correct++;
        index++;
        next();
      };
    }
    next();
  });
}
