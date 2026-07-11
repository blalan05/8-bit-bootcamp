import { completeSideQuest } from '../campaignState.js';
import { NcoScene } from '../../recruiter/ncoScene.js';

/** @type {Record<string, { id: string, title: string, run: Function }>} */
export const SIDE_QUEST_REGISTRY = {
  theStraggler: {
    id: 'theStraggler',
    title: 'The Straggler',
    run: (c) => runDialogueQuest(c, 'w1_straggler', 'The Straggler', [
      { say: 'Recruit, a boot in your platoon is falling behind on gear prep.' },
      { ask: {
        prompt: 'How do you handle it?',
        choices: [
          { text: 'Help them square away their gear before lights out.', reward: { readiness: 5, stat: 1, statKey: 'leadership' } },
          { text: 'Tell them to figure it out — not your problem.', reward: { readiness: 1 }, say: 'Every recruit for themselves doesn\'t cut it here.' },
          { text: 'Report them to the firewatch.', reward: { readiness: 3 }, say: 'Sometimes the book answer is right — but they won\'t trust you after that.' }
        ],
        bestSay: 'Good. We leave no Marine behind. That\'s leadership.'
      }}
    ])
  },
  scaredOfWater: {
    id: 'scaredOfWater',
    title: 'Scared of the Water',
    run: (c) => runDialogueQuest(c, 'w4_scared', 'Scared of the Water', [
      { say: 'Your fire team buddy is frozen at the pool edge. Swim qual is in an hour.' },
      { ask: {
        prompt: 'What do you do?',
        choices: [
          { text: 'Walk him through breathing drills at the shallow end.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'You got him in the water. That\'s what teammates do.' },
          { text: 'Tell the D.I. he can\'t hack it.', reward: { readiness: 1 }, say: 'He\'ll remember that when you need help someday.' },
          { text: 'Ignore it — not your problem.', reward: { readiness: 0 }, say: 'Leadership is choosing to act when nobody makes you.' }
        ]
      }}
    ])
  },
  blisterCheck: {
    id: 'blisterCheck',
    title: 'Blister Check',
    run: (c) => runDialogueQuest(c, 'w5_blister', 'Blister Check', [
      { say: 'A recruit is limping on the quarterdeck with blood soaking through his sock.' },
      { ask: {
        prompt: 'Your call?',
        choices: [
          { text: 'Help him moleskin it and tell him to report to Medical.', reward: { readiness: 4, stat: 1, statKey: 'leadership' }, say: 'Good initiative. He\'ll make the hike tomorrow.' },
          { text: 'March him straight to Medical without stopping.', reward: { readiness: 3 }, say: 'By the book. Safe choice.' },
          { text: 'Tell him to suck it up.', reward: { readiness: 0 }, say: 'That blister becomes an infection by field week.' }
        ]
      }}
    ])
  },
  carePackage: {
    id: 'carePackage',
    title: 'Care Package',
    run: (c) => runDialogueQuest(c, 'w7_carepkg', 'Care Package', [
      { say: 'Your rack-mate got a care package. Candy, cookies, contraband.' },
      { ask: {
        prompt: 'The D.I. doesn\'t know yet.',
        choices: [
          { text: 'Convince him to turn it in to the duty NCO.', reward: { readiness: 5, stat: 1, statKey: 'intelligence' }, say: 'Integrity matters. He learned something.' },
          { text: 'Share one piece and say nothing.', reward: { readiness: 1 }, say: 'You both ate Article 15 for breakfast.' },
          { text: 'Report him immediately.', reward: { readiness: 2 }, say: 'Right by the book — but your platoon won\'t forget.' }
        ]
      }}
    ])
  },
  theDoubter: {
    id: 'theDoubter',
    title: 'The Doubter',
    run: (c) => runDialogueQuest(c, 'w9_doubter', 'The Doubter', [
      { say: 'A recruit in your squad says he\'s done. The Crucible starts tomorrow.' },
      { ask: {
        prompt: 'He\'s sitting on his rack staring at the wall.',
        choices: [
          { text: 'Sit with him and remind him why he came.', reward: { readiness: 6, stat: 1, statKey: 'leadership' }, say: 'He stood up. That\'s the whole point of the Crucible.' },
          { text: 'Tell the D.I. he\'s quitting.', reward: { readiness: 2 }, say: 'Process is process. He\'s on the bus home.' },
          { text: 'Leave him alone — he\'ll figure it out.', reward: { readiness: 1 }, say: 'He didn\'t figure it out. He\'s gone.' }
        ]
      }}
    ])
  },
  squaredAway: {
    id: 'squaredAway',
    title: 'Squared Away',
    run: (c) => runDialogueQuest(c, 'w12_squared', 'Squared Away', [
      { say: 'Final inspection is tomorrow. Your rack-mate\'s uniform is a disaster.' },
      { ask: {
        prompt: 'Lights out in ten minutes.',
        choices: [
          { text: 'Help him press, align, and square away his rack.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'Both racks passed inspection. That\'s a team.' },
          { text: 'Focus on your own gear only.', reward: { readiness: 2 }, say: 'You passed. He didn\'t.' },
          { text: 'Let him fail — he had thirteen weeks.', reward: { readiness: 0 }, say: 'He\'s on extra duty during Warrior Week.' }
        ]
      }}
    ])
  },
  chowProtocol: {
    id: 'chowProtocol',
    title: 'Chow Hall Protocol',
    run: (c) => runDialogueQuest(c, 'w1_chow', 'Chow Hall Protocol', [
      { say: 'First chow hall visit. The D.I. barks: eyes forward, no talking in line.' },
      { ask: {
        prompt: 'Your buddy whispers a joke in the chow line.',
        choices: [
          { text: 'Stay silent and keep your eyes forward.', reward: { readiness: 4, stat: 1, statKey: 'leadership' }, say: 'Good discipline. The D.I. noticed.' },
          { text: 'Laugh quietly — it\'s harmless.', reward: { readiness: 1 }, say: 'The whole squad got IT because of you.' },
          { text: 'Tell him to shut up.', reward: { readiness: 2 }, say: 'Better than laughing — but the D.I. heard you anyway.' }
        ]
      }}
    ])
  },
  sundayService: {
    id: 'sundayService',
    title: 'Sunday Service',
    run: (c) => runDialogueQuest(c, 'w2_church', 'Sunday Service', [
      { say: 'Sunday morning. Church is optional — extra rack time if you skip.' },
      { ask: {
        prompt: 'What do you do?',
        choices: [
          { text: 'Attend church service.', reward: { readiness: 4 }, say: 'A quiet hour. Your head is clearer.' },
          { text: 'Skip church and square away your gear instead.', reward: { readiness: 3, stat: 1, statKey: 'intelligence' }, say: 'Your footlocker has never looked better.' },
          { text: 'Sleep in and hope nobody notices.', reward: { readiness: 0 }, say: 'The D.I. noticed. Extra duty.' }
        ]
      }}
    ])
  },
  houseMouse: {
    id: 'houseMouse',
    title: 'House Mouse',
    run: (c) => runDialogueQuest(c, 'w3_housemouse', 'House Mouse', [
      { say: 'The D.I. points at you. "You\'re the shortest. You\'re cleaning my duty hut tonight."' },
      { ask: {
        prompt: 'The duty hut is off-limits to recruits.',
        choices: [
          { text: 'Clean it squared-away and say nothing.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'The D.I. found it spotless. He remembers.' },
          { text: 'Snoop through his desk while you clean.', reward: { readiness: 1 }, say: 'He knew. You paid for that curiosity.' },
          { text: 'Rush it and get back before lights out.', reward: { readiness: 2 }, say: 'It passed — barely.' }
        ]
      }}
    ])
  },
  companyHouseMouse: {
    id: 'companyHouseMouse',
    title: 'Company House Mouse',
    run: (c) => runDialogueQuest(c, 'w8_companymouse', 'Company House Mouse', [
      { say: 'Promotion: the First Sergeant wants you cleaning the Company Office tonight.' },
      { ask: {
        prompt: 'The First Sergeant is still in the building.',
        choices: [
          { text: 'Work quietly and leave it inspection-ready.', reward: { readiness: 6, stat: 1, statKey: 'intelligence' }, say: 'The First Sergeant shook your hand. That never happens.' },
          { text: 'Do the minimum and get out.', reward: { readiness: 2 }, say: 'It was acceptable. Nothing more.' },
          { text: 'Try to chat him up while you work.', reward: { readiness: 0 }, say: 'He told the D.I. you have too much mouth.' }
        ]
      }}
    ])
  },
  squadLeader: {
    id: 'squadLeader',
    title: 'Squad Leader',
    run: (c) => runDialogueQuest(c, 'w5_squadleader', 'Squad Leader', [
      { say: 'The D.I. appoints you squad leader. "Your squad. Your problem."' },
      { ask: {
        prompt: 'A squadmate fails inspection because of a gig line.',
        choices: [
          { text: 'Own it with the D.I. and fix it as a squad.', reward: { readiness: 6, stat: 1, statKey: 'leadership' }, say: 'That\'s leadership. The D.I. saw it.' },
          { text: 'Cover for him quietly.', reward: { readiness: 2 }, say: 'He owes you — but the D.I. isn\'t stupid.' },
          { text: 'Throw him under the bus.', reward: { readiness: 1 }, say: 'The D.I. kept you as squad leader. Nobody trusts you.' }
        ]
      }}
    ])
  },
  guide: {
    id: 'guide',
    title: 'The Guide',
    run: (c) => runDialogueQuest(c, 'w12_guide', 'The Guide', [
      { say: 'You\'re handed the guidon for final drill and graduation parade.' },
      { ask: {
        prompt: 'A recruit in your platoon is shaking before the parade.',
        choices: [
          { text: 'Talk him through it — steady voice, steady guidon.', reward: { readiness: 8, stat: 1, statKey: 'leadership' }, say: 'He marched. You carried the guidon like you were born to it.' },
          { text: 'Tell him to suck it up.', reward: { readiness: 3 }, say: 'He made it. Barely.' },
          { text: 'Focus only on your own performance.', reward: { readiness: 4 }, say: 'The guidon was steady. The platoon was not.' }
        ]
      }}
    ])
  },
  remedialDrill: {
    id: 'remedialDrill',
    title: 'Remedial Drill',
    run: (c) => runDialogueQuest(c, 'w2_remedial_drill', 'Remedial Drill', [
      { say: 'The D.I. pulls you aside after drill. "You move like a recruit in a body bag. Extra drill for you."' },
      { ask: {
        prompt: 'Two hours of close-order drill on the quarterdeck. How do you handle it?',
        choices: [
          { text: 'Execute every command sharp — treat it as a chance to improve.', reward: { readiness: 4, stat: 1, statKey: 'dexterity' }, say: 'Your facing movements actually looked crisp by the end.' },
          { text: 'Go through the motions and count the minutes.', reward: { readiness: 1 }, say: 'You survived. The D.I. wasn\'t impressed.' },
          { text: 'Complain that it\'s unfair.', reward: { readiness: 0 }, say: 'The whole platoon got IT because of your mouth.' }
        ]
      }}
    ])
  },
  bodyCompProgram: {
    id: 'bodyCompProgram',
    title: 'Body Composition Program',
    run: (c) => runDialogueQuest(c, 'w2_body_comp', 'Body Composition Program', [
      { say: 'After the PFT baseline, the D.I. reads your name. "Body composition program. You\'re on the quarterdeck after chow."' },
      { ask: {
        prompt: 'Extra incentive training — push-ups, mountain climbers, side straddle hops until the D.I. is tired.',
        choices: [
          { text: 'Attack the IT session — outwork the program.', reward: { readiness: 4, stat: 1, statKey: 'endurance' }, say: 'You were still standing when it ended. He noticed.' },
          { text: 'Do the minimum reps and conserve energy.', reward: { readiness: 2 }, say: 'You passed the program. Barely.' },
          { text: 'Skip reps when the D.I. turns his back.', reward: { readiness: 0 }, say: 'He turned back. You\'re on the program another week.' }
        ]
      }}
    ])
  },
  remedialKnowledge: {
    id: 'remedialKnowledge',
    title: 'Remedial Knowledge',
    run: (c) => runDialogueQuest(c, 'w3_remedial_knowledge', 'Remedial Knowledge', [
      { say: 'The knowledge instructor flags you after class. "You don\'t know the General Orders. Remedial tutoring."' },
      { ask: {
        prompt: 'Extra study session in the Lecture Hall. The instructor drills the orders until you recite them.',
        choices: [
          { text: 'Study hard and recite from memory without prompts.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'You nailed every order. The instructor signed you off.' },
          { text: 'Mumble through and hope he moves on.', reward: { readiness: 1 }, say: 'He moved on. You\'ll need it again at mid-cycle.' },
          { text: 'Ask a smart recruit to whisper answers.', reward: { readiness: 0 }, say: 'The instructor caught you. Extra duty.' }
        ]
      }}
    ])
  },
  remedialStrength: {
    id: 'remedialStrength',
    title: 'Remedial Strength',
    run: (c) => runDialogueQuest(c, 'w3_remedial_strength', 'Remedial Strength', [
      { say: 'The D.I. marches you to the pull-up bars. "You\'ve got noodle arms. Remedial strength training."' },
      { ask: {
        prompt: 'Max set pull-ups, flexed-arm hang, and negative reps until failure.',
        choices: [
          { text: 'Give maximum effort on every rep — no half pulls.', reward: { readiness: 4, stat: 1, statKey: 'strength' }, say: 'You got one more rep than last time. Progress.' },
          { text: 'Kip and cheat the reps to finish faster.', reward: { readiness: 0 }, say: 'The D.I. counted zero. Start over.' },
          { text: 'Quit when it burns and ask to be excused.', reward: { readiness: 1 }, say: 'You\'re back tomorrow. Same bars.' }
        ]
      }}
    ])
  }
};

export function getSideQuest(questId) {
  return SIDE_QUEST_REGISTRY[questId] ?? null;
}

/**
 * Generic dialogue side quest runner.
 * @param {object} character
 * @param {string} questStorageId
 * @param {string} title
 * @param {Array} script
 */
function runDialogueQuest(character, questStorageId, title, script) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel recruiter-panel recruiter-panel--station">
        <h2 class="menu-title">Side Quest</h2>
        <p class="menu-subtitle">${title}</p>
        <div class="recruiter-body" id="sq-body"></div>
        <div class="recruiter-actions" id="sq-actions"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    const bodyEl = overlay.querySelector('#sq-body');
    const scene = new NcoScene(bodyEl);

    (async () => {
      let reward = { readiness: 2 };
      for (const step of script) {
        if (step.say) await scene.say(step.say);
        if (step.ask) {
          const choice = await scene.ask(step.ask);
          const picked = step.ask.choices[choice];
          reward = picked.reward ?? { readiness: 2 };
          if (picked.say) await scene.say(picked.say);
          else if (step.ask.bestSay && choice === 0) await scene.say(step.ask.bestSay);
        }
      }
      scene.dispose();
      overlay.remove();
      resolve(completeSideQuest(character, questStorageId, reward));
    })();
  });
}

export function offerSideQuest(character, sideQuestMeta) {
  const quest = getSideQuest(sideQuestMeta.questId);
  if (!quest) return Promise.resolve(character);

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.innerHTML = `
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Side Quest Available</h2>
        <p class="menu-subtitle">${sideQuestMeta.title}</p>
        <p class="recruiter-copy">Near ${sideQuestMeta.locationName}. Optional — small readiness reward.${sideQuestMeta.maxStats ? ' <em>Remedial — offered based on your stats.</em>' : ''}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="sq-accept">Investigate</button>
          <button type="button" class="btn btn-secondary" id="sq-skip">Skip</button>
        </div>
      </div>
    `;

    overlay.querySelector('#sq-accept').addEventListener('click', async () => {
      overlay.remove();
      const updated = await quest.run(character);
      resolve(updated);
    }, { once: true });

    overlay.querySelector('#sq-skip').addEventListener('click', () => {
      overlay.remove();
      resolve(character);
    }, { once: true });

    document.body.appendChild(overlay);
  });
}
