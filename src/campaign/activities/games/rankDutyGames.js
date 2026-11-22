import { buildActivityResult } from '../../activityRegistry.js';
import {
  mountGame, runQTESequence, runClickSequence, runWatchRounds, runChoiceRounds
} from '../lib/minigameKit.js';

/* Rank duties: one per operation, drawn from the pool for the Marine's current rank.
   Text stays era-neutral because every war campaign shares these pools. */

const RECALL_READ_MS = 7000;

/**
 * Memorize an order, then answer questions about it from memory.
 * @param {HTMLElement} container
 * @param {{ title: string, hint: string, order: string[], rounds: object[] }} opts
 */
async function runOrderRecall(container, { title, hint, order, rounds }) {
  await new Promise(resolve => {
    const ui = mountGame(container, { title, hint });
    ui.main.innerHTML = `
      <div class="mg-prompt">Memorize the order</div>
      <div class="mg-recall">${order.map(line => `<p>${line}</p>`).join('')}</div>
      <div class="mg-seq-status" id="recall-timer"></div>`;
    const timerEl = ui.main.querySelector('#recall-timer');
    const start = performance.now();
    const tick = setInterval(() => {
      const left = Math.max(0, RECALL_READ_MS - (performance.now() - start));
      timerEl.textContent = `${Math.ceil(left / 1000)}s`;
      if (left <= 0) {
        clearInterval(tick);
        ui.dispose();
        resolve();
      }
    }, 100);
  });
  return runChoiceRounds(container, { rounds, title, hint: 'From memory. No second look.' });
}

/* ---------- Rifleman (Private / PFC) ---------- */

export async function runPointMan(container, character) {
  const r = await runWatchRounds(container, character, {
    title: 'Walk Point',
    hint: 'Press S to halt the column on danger signs. Keep moving on a clear trail.',
    statKeys: ['intelligence', 'dexterity'],
    stimuli: [
      { label: 'DISTURBED GROUND — HALT', weight: 0.4, code: 'KeyS', action: 'HALT' },
      { label: 'FRESH TRACKS — HALT', weight: 0.2, code: 'KeyS', action: 'HALT' },
      { label: 'CLEAR TRAIL', weight: 0.4, code: null }
    ]
  });
  return buildActivityResult(r.score, ['intelligence', 'dexterity'], r);
}

const SENTRY_ROUNDS = [
  {
    prompt: 'A figure approaches your post in the dark.',
    choices: ['Challenge: "Halt! Who goes there?" and demand the password.', 'Fire immediately.', 'Wave him through. Probably one of ours.'],
    answer: 0
  },
  {
    prompt: 'Two hours in, your eyes are closing.',
    choices: ['Stand up, keep moving on your post, stay alert.', 'Sit down and rest your eyes for a minute.', 'Leave your post to find coffee.'],
    answer: 0
  },
  {
    prompt: 'You hear movement outside the wire.',
    choices: ['Alert the sergeant of the guard and keep watching the sound.', 'Shout to wake up the whole line.', 'Ignore it. Animals.'],
    answer: 0
  },
  {
    prompt: 'Your relief is late.',
    choices: ['Stay on post until properly relieved.', 'Head back to your hole. Your time is up.', 'Leave your rifle on the post and go find him.'],
    answer: 0
  }
];

export async function runSentryPost(container) {
  const r = await runChoiceRounds(container, { rounds: SENTRY_ROUNDS, title: 'Stand Your Post', hint: 'The line sleeps because you don\'t' });
  return buildActivityResult(r.score, ['intelligence', 'leadership'], r);
}

export async function runCarryWounded(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: [
      { label: 'CASUALTY — LIFT' },
      { label: 'FORWARD — MOVE' },
      { label: 'INCOMING — GET DOWN' },
      { label: 'FORWARD — MOVE' },
      { label: 'AID STATION — SECURE' }
    ],
    statKeys: ['strength', 'endurance'],
    title: 'Carry the Wounded',
    hint: 'Get him back to the aid station alive'
  });
  return buildActivityResult(r.score, ['strength', 'endurance'], r);
}

/* ---------- Senior junior Marine (Lance Corporal, or PFC before 1958) ---------- */

const NEW_GUY_ROUNDS = [
  {
    prompt: 'A replacement joins the squad. He\'s jumpy and asking a lot of questions.',
    choices: ['Answer them, show him how you pack your gear, keep him near you.', 'Haze him. Everyone went through it.', 'Ignore him until he proves himself.'],
    answer: 0
  },
  {
    prompt: 'He skylines himself on the ridge during a halt.',
    choices: ['Pull him down quietly and explain why after.', 'Yell at him in front of the squad.', 'Say nothing. He\'ll learn.'],
    answer: 0
  },
  {
    prompt: 'He drank all his water before noon.',
    choices: ['Share some of yours and teach him to ration it.', 'Let him suffer. Lesson learned.', 'Report him to the platoon sergeant.'],
    answer: 0
  }
];

export async function runNewGuy(container) {
  const r = await runChoiceRounds(container, { rounds: NEW_GUY_ROUNDS, title: 'Square Away the New Guy', hint: 'Somebody did this for you once' });
  return buildActivityResult(r.score, ['leadership'], r);
}

export async function runRunner(container) {
  const r = await runOrderRecall(container, {
    title: 'Runner',
    hint: 'Carry the message word for word',
    order: [
      'TO: Second Platoon.',
      'Hold the north ridge until 0600.',
      'Ammunition resupply at the stream crossing.',
      'Withdraw on two green flares.'
    ],
    rounds: [
      { prompt: 'Which unit is the message for?', choices: ['Second Platoon', 'First Platoon', 'Weapons Platoon'], answer: 0 },
      { prompt: 'Hold the ridge until when?', choices: ['0600', '0400', 'Dusk'], answer: 0 },
      { prompt: 'Where is the resupply?', choices: ['The stream crossing', 'The north ridge', 'The aid station'], answer: 0 },
      { prompt: 'What is the withdrawal signal?', choices: ['Two green flares', 'One red flare', 'Three whistle blasts'], answer: 0 }
    ]
  });
  return buildActivityResult(r.score, ['intelligence', 'endurance'], r);
}

export async function runActingTeamLeader(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: [
      { label: 'CONTACT — GET DOWN' },
      { label: 'RETURN — FIRE' },
      { label: 'CONTACT RIGHT' },
      { label: 'BOUND — MOVE' },
      { label: 'SECTOR — CHECK' },
      { label: 'TEAM — FINISH' }
    ],
    statKeys: ['leadership', 'dexterity'],
    title: 'Acting Team Leader',
    hint: 'Your team leader is down. The team looks at you.'
  });
  return buildActivityResult(r.score, ['leadership', 'dexterity'], r);
}

/* ---------- Fireteam leader (Corporal) ---------- */

const SECTOR_ROUNDS = [
  {
    prompt: 'Where do you place your automatic rifleman?',
    choices: ['Covering the most likely enemy approach.', 'In the rear, safe from fire.', 'Wherever he wants.'],
    answer: 0
  },
  {
    prompt: 'Your rifleman\'s sector?',
    choices: ['Overlapping the automatic rifleman\'s sector so there are no gaps.', 'The same exact spot as the automatic rifleman.', 'Behind the team, facing friendly lines.'],
    answer: 0
  },
  {
    prompt: 'Your assistant automatic rifleman?',
    choices: ['Beside the automatic rifleman with extra ammunition, ready to take over.', 'Sent off alone to scout.', 'Asleep. He has the next watch.'],
    answer: 0
  },
  {
    prompt: 'Where do you position yourself?',
    choices: ['Where you can see and control all three Marines.', 'Out front, alone.', 'At the squad leader\'s hole, chatting.'],
    answer: 0
  }
];

export async function runSectorsOfFire(container) {
  const r = await runChoiceRounds(container, { rounds: SECTOR_ROUNDS, title: 'Sectors of Fire', hint: 'Three Marines, no gaps in the line' });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

export async function runBoundingOverwatch(container, character) {
  const r = await runQTESequence(container, character, {
    prompts: [
      { label: 'BASE OF FIRE — FIRE' },
      { label: 'BUDDY TEAM — MOVE' },
      { label: 'INCOMING — GET DOWN' },
      { label: 'COVER — FIRE' },
      { label: 'BUDDY TEAM — MOVE' },
      { label: 'POSITION — SECURE' }
    ],
    statKeys: ['leadership', 'intelligence'],
    title: 'Bounding Overwatch',
    hint: 'One pair moves while the other covers. Never both at once.'
  });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

const HEAD_COUNT_STEPS = [
  'Count your Marines',
  'Check for wounded',
  'Redistribute ammunition',
  'Reset sectors of fire',
  'Report to the squad leader'
];

export async function runHeadCount(container) {
  const r = await runClickSequence(container, {
    items: HEAD_COUNT_STEPS,
    correctOrder: HEAD_COUNT_STEPS,
    timeMs: 16000,
    title: 'After Contact',
    hint: 'Consolidate and report in the correct order'
  });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

/* ---------- Squad leader (Sergeant) ---------- */

const SQUAD_ATTACK_ROUNDS = [
  {
    prompt: 'Enemy position on the hill. How do you employ your three fireteams?',
    choices: ['One team as base of fire, two maneuver to the flank.', 'All three straight up the hill together.', 'All three hold back and wait for support.'],
    answer: 0
  },
  {
    prompt: 'The maneuver element is in position. What now?',
    choices: ['Signal the base of fire to shift fire, then assault.', 'Assault while the base of fire keeps shooting into the objective.', 'Call everyone back to regroup.'],
    answer: 0
  },
  {
    prompt: 'The objective is taken.',
    choices: ['Consolidate: security out, ammunition and casualty count from each team.', 'Let the squad rest on the hilltop.', 'Push on to the next hill immediately.'],
    answer: 0
  }
];

export async function runSquadAttack(container) {
  const r = await runChoiceRounds(container, { rounds: SQUAD_ATTACK_ROUNDS, title: 'Squad Attack', hint: 'Fire and maneuver with three fireteams' });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

const DEFENSE_STEPS = [
  'Post security',
  'Assign team sectors',
  'Site automatic weapons',
  'Dig fighting holes',
  'Set the watch rotation'
];

export async function runSetDefense(container) {
  const r = await runClickSequence(container, {
    items: DEFENSE_STEPS,
    correctOrder: DEFENSE_STEPS,
    timeMs: 18000,
    title: 'Set the Defense',
    hint: 'Security first. Then build the position in order.'
  });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}

export async function runBriefTheSquad(container) {
  const r = await runOrderRecall(container, {
    title: 'Brief the Squad',
    hint: 'The platoon commander gives you the order once',
    order: [
      'Enemy outpost at the river bend, about ten men.',
      'Mission: seize the outpost by first light.',
      'First Team base of fire. Second and Third Teams assault from the east.',
      'Rally point: the burned farmhouse.'
    ],
    rounds: [
      { prompt: 'Where is the enemy outpost?', choices: ['The river bend', 'The burned farmhouse', 'The east ridge'], answer: 0 },
      { prompt: 'Which team is the base of fire?', choices: ['First Team', 'Second Team', 'Third Team'], answer: 0 },
      { prompt: 'Which direction does the assault come from?', choices: ['East', 'West', 'North'], answer: 0 },
      { prompt: 'Where is the rally point?', choices: ['The burned farmhouse', 'The river bend', 'The line of departure'], answer: 0 }
    ]
  });
  return buildActivityResult(r.score, ['leadership', 'intelligence'], r);
}
