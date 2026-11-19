const MESSAGE_MAX = 150;
const ERROR_CAP = 20;
const OPT_OUT_KEY = 'bootcamp-telemetry';

const context = { campaign: '', activity: '' };
const sentKeys = new Set();
let installed = false;
let errorSends = 0;

/**
 * Campaign and activity ids only. Never pass a recruit name or save.
 * @param {{ campaign?: string, activity?: string }} next
 */
export function setPlayContext(next = {}) {
  if (next.campaign !== undefined) context.campaign = sanitizeId(next.campaign);
  if (next.activity !== undefined) context.activity = sanitizeId(next.activity);
}

export function installErrorListener() {
  if (installed) return;
  installed = true;

  window.addEventListener('error', (event) => {
    noteError(event.message, event.filename);
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const message = reason instanceof Error ? reason.message : String(reason ?? '');
    noteError(message, '');
  });

  send('play', {});
}

function sanitizeId(value) {
  const text = String(value ?? '').trim();
  if (!/^[a-z0-9_-]{1,40}$/i.test(text)) return '';
  return text;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function scrubNames(text) {
  let cleaned = text;
  try {
    for (let i = 0; i < 3; i += 1) {
      const raw = localStorage.getItem(`bootcamp-save-${i}`);
      if (!raw) continue;
      const name = JSON.parse(raw)?.name;
      if (typeof name !== 'string') continue;
      const trimmed = name.trim();
      if (trimmed.length < 2) continue;
      cleaned = cleaned.replace(new RegExp(`\\b${escapeRegExp(trimmed)}\\b`, 'gi'), '');
    }
  } catch {
    /* storage or save JSON unavailable */
  }
  return cleaned;
}

function clipMessage(message) {
  return scrubNames(String(message ?? ''))
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s.:'"\-_/()]/g, '')
    .trim()
    .slice(0, MESSAGE_MAX);
}

function noteError(message, filename) {
  if (filename && /^(chrome|moz|safari)-extension:/.test(filename)) return;
  const text = clipMessage(message);
  if (!text || text === 'Script error.') return;
  if (/ResizeObserver loop/.test(text)) return;

  const key = `${text}|${context.campaign}|${context.activity}`;
  if (sentKeys.has(key) || errorSends >= ERROR_CAP) return;
  sentKeys.add(key);
  errorSends += 1;

  const props = { message: text };
  if (context.campaign) props.campaign = context.campaign;
  if (context.activity) props.activity = context.activity;
  send('error', props);
}

function countsAllowed() {
  try {
    return localStorage.getItem(OPT_OUT_KEY) !== 'off' && !localStorage.getItem('umami.disabled');
  } catch {
    return false;
  }
}

function send(name, props) {
  if (!countsAllowed()) return;

  const data = { ...props, build: __APP_BUILD__ };
  if (import.meta.env.DEV) {
    window.__bootcampLastCount = { name, props: data };
  }

  const fire = () => {
    if (typeof window.umami?.track !== 'function') return false;
    window.umami.track(name, data);
    return true;
  };

  if (fire()) return;

  let tries = 0;
  const timer = setInterval(() => {
    tries += 1;
    if (fire() || tries >= 20) clearInterval(timer);
  }, 200);
}
