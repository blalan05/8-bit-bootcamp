import { getCampaignForCharacter, getCampaignWeeks } from '../campaigns/campaignRegistry.js';
import { getAvailableSideQuests } from '../campaign/campaignData.js';
import { isSandbox, isGraduated, isSideQuestDone } from '../campaign/campaignState.js';
import { getFieldNote, getLearnedFieldNotes, getLessonsLearned } from '../campaign/fieldNotes.js';
import { escapeHtml } from './html.js';

const GRADE_LABELS = { honor: 'HONOR', passing: 'PASS', unsat: 'UNSAT' };

function gradeBadge(grade) {
  return `<span class="grade-badge grade-badge--${grade}">${GRADE_LABELS[grade] ?? grade}</span>`;
}

function renderOrders(character, objective) {
  if (isSandbox(character)) {
    return '<p class="recruiter-copy">Free play. Walk to any location to replay its activities.</p>';
  }
  if (isGraduated(character)) {
    const campaign = getCampaignForCharacter(character);
    const earned = campaign.usesRecruiter === false ? 'Campaign honors:' : 'You earned the title';
    return `<p class="recruiter-copy">${escapeHtml(campaign.completion?.title ?? 'Campaign')} complete. ${earned} <strong>${escapeHtml(character.honorsTitle ?? 'Marine')}</strong>.</p>`;
  }
  if (!objective) {
    return '<p class="recruiter-copy recruiter-copy--small">Stand by for orders.</p>';
  }
  return `
    <p class="schedule-assignment">${escapeHtml(objective.title)}</p>
    <p class="recruiter-copy">${escapeHtml(objective.briefing ?? '')}</p>
    <div class="schedule-location">
      <span class="schedule-label">Report to</span>
      <span class="schedule-value">${escapeHtml(objective.locationName)}</span>
    </div>
  `;
}

function renderSchedule(character) {
  const campaign = character.campaign;
  const def = getCampaignForCharacter(character);
  const periodLabel = def.periodLabel ?? 'Week';
  const graduated = isGraduated(character);

  return getCampaignWeeks(character).map(week => {
    const isCurrent = !graduated && week.id === campaign.week;
    const isPast = graduated || week.id < campaign.week;

    if (!isPast && !isCurrent) {
      return `
        <div class="journal-week journal-week--locked">
          <span class="journal-week-title">${periodLabel} ${week.id}: ${escapeHtml(week.name)}</span>
        </div>
      `;
    }

    const days = (week.days ?? []).map((day, index) => {
      const result = campaign.completed?.[day.id];
      const isToday = isCurrent && index + 1 === campaign.dayInWeek && !result;
      const status = result
        ? gradeBadge(result.grade)
        : isToday ? '<span class="journal-status journal-status--today">TODAY</span>' : '';
      return `
        <li class="journal-day${isToday ? ' journal-day--today' : ''}${result ? ' journal-day--done' : ''}">
          <span class="journal-day-title">${escapeHtml(day.title)}</span>
          <span class="journal-day-loc">${escapeHtml(day.locationName)}</span>
          <span class="journal-day-status">${status}</span>
        </li>
      `;
    }).join('');

    const sideQuests = (week.sideQuests ?? []).filter(sq => isSideQuestDone(character, sq.id));
    const sideQuestList = sideQuests.length
      ? `<ul class="journal-sq-list">${sideQuests.map(sq => `<li>Side quest: ${escapeHtml(sq.title)} <span class="stat-delta stat-delta--up">DONE</span></li>`).join('')}</ul>`
      : '';

    return `
      <details class="journal-week${isCurrent ? ' journal-week--current' : ''}"${isCurrent ? ' open' : ''}>
        <summary class="journal-week-title">${periodLabel} ${week.id}: ${escapeHtml(week.name)}</summary>
        <p class="journal-week-theme">${escapeHtml(week.theme ?? '')}</p>
        <ul class="journal-days">${days}</ul>
        ${sideQuestList}
      </details>
    `;
  }).join('');
}

function renderQuestLog(character, objective) {
  const sandbox = isSandbox(character);
  const available = !sandbox && !isGraduated(character)
    ? getAvailableSideQuests(character.campaign.week, character.campaign.dayInWeek, character)
    : [];

  return `
    <h3 class="sheet-heading">Current Orders</h3>
    <div class="journal-card">${renderOrders(character, objective)}</div>

    ${available.length ? `
      <h3 class="sheet-heading">Side Quests</h3>
      <ul class="journal-sq-list">
        ${available.map(sq => `<li><strong>${escapeHtml(sq.title)}</strong> near ${escapeHtml(sq.locationName)}. Offered after today's assignment.</li>`).join('')}
      </ul>
    ` : ''}

    ${sandbox ? '' : `
      <h3 class="sheet-heading">Schedule</h3>
      ${renderSchedule(character)}
    `}
  `;
}

function countLearnableNotes(character) {
  const def = getCampaignForCharacter(character);
  const ids = new Set();
  for (const week of getCampaignWeeks(character)) {
    for (const day of week.days ?? []) {
      if (getFieldNote(def.id, day.activityId)) ids.add(day.activityId);
    }
  }
  return ids.size;
}

function renderKnowledge(character) {
  const def = getCampaignForCharacter(character);
  const notes = getLearnedFieldNotes(character);
  const lessons = getLessonsLearned(character);
  const learnable = isSandbox(character) ? null : countLearnableNotes(character);
  const briefing = def.briefing?.lines ?? [];

  const brief = briefing.length ? `
    <h3 class="sheet-heading">Theater Brief</h3>
    <div class="journal-card">
      ${def.briefing.officer ? `<p class="journal-note-source">${escapeHtml(def.briefing.officer)}</p>` : ''}
      ${briefing.map(line => `<p class="recruiter-copy recruiter-copy--small">${escapeHtml(line)}</p>`).join('')}
    </div>
  ` : '';

  const noteList = notes.length
    ? notes.map(note => `
        <article class="journal-note">
          <h4 class="journal-note-topic">${escapeHtml(note.topic)}</h4>
          <p class="journal-note-text">${escapeHtml(note.text)}</p>
          <p class="journal-note-source">${escapeHtml(note.source)}</p>
        </article>
      `).join('')
    : '<p class="recruiter-copy recruiter-copy--small">Complete activities to fill your field manual.</p>';

  const lessonList = lessons.length
    ? lessons.map(lesson => `
        <article class="journal-note journal-note--lesson">
          <h4 class="journal-note-topic">${escapeHtml(lesson.title)}</h4>
          <p class="journal-note-text">You chose: ${escapeHtml(lesson.choice)}</p>
          ${lesson.response ? `<p class="journal-note-quote">"${escapeHtml(lesson.response)}"</p>` : ''}
          <p class="journal-note-source">${escapeHtml(lesson.source)}</p>
        </article>
      `).join('')
    : '<p class="recruiter-copy recruiter-copy--small">Take on side quests to learn from experience.</p>';

  return `
    ${brief}
    <h3 class="sheet-heading">Field Manual ${learnable != null ? `<span class="journal-count">${notes.length} / ${learnable}</span>` : ''}</h3>
    ${noteList}
    <h3 class="sheet-heading">Lessons Learned</h3>
    ${lessonList}
  `;
}

const SECTIONS = [
  { id: 'quests', label: 'Quest Log', render: renderQuestLog },
  { id: 'knowledge', label: 'Knowledge', render: renderKnowledge }
];

let lastSection = 'quests';

/**
 * @param {HTMLElement} container
 * @param {import('./gameMenu.js').GameMenuContext} ctx
 */
export function renderJournal(container, ctx) {
  const character = ctx.getCharacter();
  const objective = ctx.getObjective();

  container.innerHTML = `
    <div class="journal">
      <div class="journal-sections">
        ${SECTIONS.map(s => `<button type="button" class="btn btn-secondary btn-compact journal-section-btn" data-section="${s.id}">${s.label}</button>`).join('')}
      </div>
      <div class="journal-content"></div>
    </div>
  `;

  const content = container.querySelector('.journal-content');
  const show = id => {
    lastSection = id;
    const section = SECTIONS.find(s => s.id === id) ?? SECTIONS[0];
    content.innerHTML = section.render(character, objective);
    for (const btn of container.querySelectorAll('[data-section]')) {
      btn.classList.toggle('journal-section-btn--active', btn.dataset.section === section.id);
    }
  };

  container.querySelector('.journal-sections').addEventListener('click', e => {
    const btn = e.target.closest('[data-section]');
    if (btn) show(btn.dataset.section);
  });
  show(lastSection);
  return null;
}
