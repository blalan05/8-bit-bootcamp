const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape text for interpolation into innerHTML. */
export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ENTITIES[ch]);
}
