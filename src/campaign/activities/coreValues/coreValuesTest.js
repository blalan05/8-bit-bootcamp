import { buildActivityResult } from '../../activityRegistry.js';
import { CoreValuesScene } from './coreValuesScene.js';

const TRAITS = [
  {
    trait: 'Justice',
    definition: 'Giving reward and punishment according to the merits of the case in question.',
    distractors: [
      'Following orders without question.',
      'Winning at all costs in every situation.',
      'Keeping your uniform squared away at all times.'
    ]
  },
  {
    trait: 'Judgment',
    definition: 'The ability to weigh facts and possible solutions on which to base sound decisions.',
    distractors: [
      'Never admitting when you are wrong.',
      'Making the fastest decision every time.',
      'Deferring every decision to a senior Marine.'
    ]
  },
  {
    trait: 'Dependability',
    definition: 'The willing and voluntary support of the policies and orders of the chain of command.',
    distractors: [
      'Doing only what is explicitly ordered.',
      'Never volunteering for extra duty.',
      'Keeping personal plans above unit commitments.'
    ]
  },
  {
    trait: 'Integrity',
    definition: 'Uprightness of character and soundness of moral principles; truthfulness and honesty.',
    distractors: [
      'Telling people what they want to hear.',
      'Protecting your friends even when they are wrong.',
      'Avoiding paperwork whenever possible.'
    ]
  },
  {
    trait: 'Decisiveness',
    definition: 'Ability to make decisions promptly and to announce them in a clear, forceful manner.',
    distractors: [
      'Waiting until every detail is perfect.',
      'Letting the squad vote on tactical calls.',
      'Changing your mind after every new report.'
    ]
  },
  {
    trait: 'Tact',
    definition: 'The ability to deal with others without creating offense.',
    distractors: [
      'Saying exactly what you think at all times.',
      'Avoiding difficult conversations entirely.',
      'Using sarcasm to keep junior Marines in line.'
    ]
  }
];

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * @param {HTMLElement} container
 * @param {object} character
 */
export function runCoreValues(container, character) {
  return new Promise(resolve => {
    const scene = new CoreValuesScene(container);
    let index = 0;
    let correct = 0;

    function askRound() {
      if (index >= TRAITS.length) {
        scene.dispose();
        const score = correct / TRAITS.length;
        resolve(buildActivityResult(score, ['intelligence', 'leadership'], { correct, total: TRAITS.length }));
        return;
      }

      const item = TRAITS[index];
      const choices = shuffle([item.definition, ...item.distractors]);
      const answerIndex = choices.indexOf(item.definition);

      scene.showRound(item.trait, choices, index + 1, TRAITS.length);

      scene.choicesEl.addEventListener('click', function handler(e) {
        const btn = e.target.closest('[data-choice]');
        if (!btn) return;
        scene.choicesEl.removeEventListener('click', handler);
        if (Number(btn.dataset.choice) === answerIndex) correct++;
        index++;
        askRound();
      }, { once: false });
    }

    askRound();
  });
}
