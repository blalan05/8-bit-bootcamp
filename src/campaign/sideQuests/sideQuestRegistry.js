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
  },
  greenReplacement: {
    id: 'greenReplacement',
    title: 'The Green Replacement',
    run: (c) => runDialogueQuest(c, 'o1_green', 'The Green Replacement', [
      { say: 'A replacement just landed on the beach. He\'s never been under fire.' },
      { ask: {
        prompt: 'How do you bring him up to speed?',
        choices: [
          { text: 'Walk him through your foxhole and sector of fire.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He held the line on first contact. Good work, Marine.' },
          { text: 'Tell him to figure it out — survival of the fittest.', reward: { readiness: 1 }, say: 'He panicked at the first mortar round.' },
          { text: 'Send him straight to the aid station.', reward: { readiness: 2 }, say: 'By the book, but he won\'t learn out here.' }
        ]
      }}
    ])
  },
  warDogHandler: {
    id: 'warDogHandler',
    title: 'War Dog Handler',
    run: (c) => runDialogueQuest(c, 'o2_dog', 'War Dog Handler', [
      { say: 'A war dog handler needs help securing the airstrip perimeter before nightfall.' },
      { ask: {
        prompt: 'The dog is alerting on movement in the treeline.',
        choices: [
          { text: 'Follow the handler and set up a listening post.', reward: { readiness: 5, stat: 1, statKey: 'intelligence' }, say: 'Hostile patrol spotted. The dog saved your section.' },
          { text: 'Open fire on the treeline immediately.', reward: { readiness: 0 }, say: 'Friendly patrol. That was a near disaster.' },
          { text: 'Ignore it — dogs false-alert all the time.', reward: { readiness: 1 }, say: 'Japanese scouts got through the gap.' }
        ]
      }}
    ])
  },
  corpsmanDown: {
    id: 'corpsmanDown',
    title: 'Corpsman Down',
    run: (c) => runDialogueQuest(c, 'o3_corpsman', 'Corpsman Down', [
      { say: 'Your corpsman took shrapnel on the patrol. The aid station is two klicks back.' },
      { ask: {
        prompt: 'What do you do?',
        choices: [
          { text: 'Carry him back and apply field dressings en route.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He made it. The battalion surgeon says you saved his life.' },
          { text: 'Leave him with the walking wounded and push on.', reward: { readiness: 2 }, say: 'Mission continued. He\'ll remember that.' },
          { text: 'Call for mortar smoke and evacuate under cover.', reward: { readiness: 4 }, say: 'Smart call. He\'s stable.' }
        ]
      }}
    ])
  },
  saltyVet: {
    id: 'saltyVet',
    title: 'The Salty Vet',
    run: (c) => runDialogueQuest(c, 'o5_salty', 'The Salty Vet', [
      { say: 'A Guadalcanal veteran pulls you aside in the command tent. "You look like hell, kid."' },
      { ask: {
        prompt: 'He offers advice on jungle survival.',
        choices: [
          { text: 'Listen and take notes — he\'s been here since August.', reward: { readiness: 5, stat: 1, statKey: 'intelligence' }, say: 'His tricks kept your section alive through the next patrol.' },
          { text: 'Tell him you don\'t need advice from an old-timer.', reward: { readiness: 0 }, say: 'Pride kills Marines out here.' },
          { text: 'Nod politely but stick to the field manual.', reward: { readiness: 3 }, say: 'The book is right. Experience is faster.' }
        ]
      }}
    ])
  },
  flamethrowerTeam: {
    id: 'flamethrowerTeam',
    title: 'Flamethrower Team',
    run: (c) => runDialogueQuest(c, 'o7_flame', 'Flamethrower Team', [
      { say: 'A flamethrower team is pinned down short of a cave mouth. The operator is asking for covering fire.' },
      { ask: {
        prompt: 'What do you do?',
        choices: [
          { text: 'Suppress the cave while they advance into position.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'The cave is cleared. The team owes you one.' },
          { text: 'Tell them to wait for mortar support.', reward: { readiness: 3 }, say: 'Safer. Slower. The cave is still there tonight.' },
          { text: 'Let them handle it — not your sector.', reward: { readiness: 0 }, say: 'The operator didn\'t make it back.' }
        ]
      }}
    ])
  },
  codeTalker: {
    id: 'codeTalker',
    title: 'Code Talker',
    run: (c) => runDialogueQuest(c, 'o9_codetalker', 'Code Talker', [
      { say: 'A Navajo code talker needs a runner to deliver an encoded message to the command post under fire.' },
      { ask: {
        prompt: 'The route crosses open ground.',
        choices: [
          { text: 'Take the message yourself — low and fast.', reward: { readiness: 5, stat: 1, statKey: 'endurance' }, say: 'Message delivered. The assault timetable holds.' },
          { text: 'Find a covered route even if it takes longer.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Smart route. The code talker nods approval.' },
          { text: 'Refuse — you\'re not a runner.', reward: { readiness: 1 }, say: 'Someone else went. They took shrapnel doing it.' }
        ]
      }}
    ])
  },
  tootsieRolls: {
    id: 'tootsieRolls',
    title: 'Tootsie Rolls',
    run: (c) => runDialogueQuest(c, 'k1_tootsie', 'Tootsie Rolls', [
      { say: 'Supply dropped "Tootsie Rolls" instead of 60mm mortar ammo. The tubes are useless — but the candy bars are everywhere.' },
      { ask: {
        prompt: 'What do you do with the mislabeled crates?',
        choices: [
          { text: 'Use them to plug bullet holes in vehicles and share the rest with the platoon.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'Improvise, adapt, overcome. The Marines remember.' },
          { text: 'Report the supply error and wait for correct ammo.', reward: { readiness: 3 }, say: 'By the book. The mortar section waits.' },
          { text: 'Eat them and say nothing.', reward: { readiness: 1 }, say: 'Morale up. Mortar section not amused.' }
        ]
      }}
    ])
  },
  chosinFew: {
    id: 'chosinFew',
    title: 'The Chosin Few',
    run: (c) => runDialogueQuest(c, 'k4_chosin_few', 'The Chosin Few', [
      { say: 'A frostbitten replacement can barely hold his rifle. He\'s nineteen and shaking.' },
      { ask: {
        prompt: 'The column moves north tomorrow.',
        choices: [
          { text: 'Get him warmed up and walk him through weapon drills tonight.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He holds the line at Yudam-ni. You made a Marine.' },
          { text: 'Send him to the aid station — he\'s combat ineffective.', reward: { readiness: 3 }, say: 'Correct call. He\'ll survive.' },
          { text: 'Tell him to toughen up — everyone\'s cold.', reward: { readiness: 0 }, say: 'He falls out on the march. You carry the guilt.' }
        ]
      }}
    ])
  },
  foxCompanyRunner: {
    id: 'foxCompanyRunner',
    title: 'Fox Company Runner',
    run: (c) => runDialogueQuest(c, 'k6_fox_runner', 'Fox Company Runner', [
      { say: 'Fox Company is cut off at Toktong Pass. The CO needs a runner with a situation report — now.' },
      { ask: {
        prompt: 'The route is under Chinese machine-gun fire.',
        choices: [
          { text: 'Low-crawl the whole way with the message.', reward: { readiness: 5, stat: 1, statKey: 'endurance' }, say: 'Fox Company holds because you got through.' },
          { text: 'Wait for mortar smoke then sprint.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Smart. Message delivered.' },
          { text: 'Send someone else — you\'re not a runner.', reward: { readiness: 1 }, say: 'The runner didn\'t make it. Fox Company fought alone.' }
        ]
      }}
    ])
  },
  chestysWords: {
    id: 'chestysWords',
    title: "Chesty's Words",
    run: (c) => runDialogueQuest(c, 'k8_chesty', "Chesty's Words", [
      { say: 'Colonel Puller addresses the column: "Retreat, hell — we\'re just attacking in a different direction."' },
      { ask: {
        prompt: 'A scared private asks you what that means.',
        choices: [
          { text: 'Explain we\'re fighting our way out — not running.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He straightens up. Chesty\'s words travel down the line.' },
          { text: 'Tell him to keep marching and not ask questions.', reward: { readiness: 2 }, say: 'He marches. Fear stays.' },
          { text: 'Admit you don\'t know if you\'ll make it out.', reward: { readiness: 0 }, say: 'Honesty costs you both.' }
        ]
      }}
    ])
  },
  shortTimer: {
    id: 'shortTimer',
    title: 'The Short-Timer',
    run: (c) => runDialogueQuest(c, 'v1_shorttimer', 'The Short-Timer', [
      { say: 'A Marine with eleven days left on his tour is frozen at the bunker entrance. He won\'t move.' },
      { ask: {
        prompt: 'The column is moving out.',
        choices: [
          { text: 'Talk him through it — eleven days means he finishes with honor.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He picks up his pack. Short-timer stick still on his helmet.' },
          { text: 'Pull him by the strap and march him out.', reward: { readiness: 3 }, say: 'He moves. Resentment stays.' },
          { text: 'Leave him — not your problem.', reward: { readiness: 0 }, say: 'He never caught up. You heard about it later.' }
        ]
      }}
    ])
  },
  tunnelRat: {
    id: 'tunnelRat',
    title: 'Tunnel Rat',
    run: (c) => runDialogueQuest(c, 'v3_tunnel', 'Tunnel Rat', [
      { say: 'Intel found a spider hole under the listening post. The lieutenant needs a volunteer to go down with a pistol and a flashlight.' },
      { ask: {
        prompt: 'The hole is narrow, dark, and probably booby-trapped.',
        choices: [
          { text: 'Volunteer — go down and map what you find.', reward: { readiness: 5, stat: 1, statKey: 'dexterity' }, say: 'You come back shaking. Intel got what they needed.' },
          { text: 'Suggest sending two Marines with a rope and comm wire.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Smart. The tunnel is cleared without a casualty.' },
          { text: 'Decline — that\'s a one-way ticket.', reward: { readiness: 1 }, say: 'Someone else went. He didn\'t come back.' }
        ]
      }}
    ])
  },
  combatPhotographer: {
    id: 'combatPhotographer',
    title: 'Combat Photographer',
    run: (c) => runDialogueQuest(c, 'v6_photog', 'Combat Photographer', [
      { say: 'A civilian photographer from the Associated Press wants to follow your squad through the rubble. Command says escort him — the world is watching Hue.' },
      { ask: {
        prompt: 'He has no weapon and no training.',
        choices: [
          { text: 'Keep him in the middle of the stack and move block to block.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He gets his shots. Your squad gets home.' },
          { text: 'Send him to the rear — this isn\'t a photo op.', reward: { readiness: 3 }, say: 'He protests. Command is not pleased.' },
          { text: 'Let him wander for the dramatic angle.', reward: { readiness: 0 }, say: 'Shrapnel finds him. The headline writes itself.' }
        ]
      }}
    ])
  },
  newLieutenant: {
    id: 'newLieutenant',
    title: 'The New Lieutenant',
    run: (c) => runDialogueQuest(c, 'v8_lieutenant', 'The New Lieutenant', [
      { say: 'A butter-bar lieutenant fresh from Quantico wants to assault the Citadel walls head-on. Your squad has been in Hue for three days.' },
      { ask: {
        prompt: 'He outranks you. The NVA have the high ground.',
        choices: [
          { text: 'Suggest flanking through the university — show him the map.', reward: { readiness: 5, stat: 1, statKey: 'intelligence' }, say: 'He listens. The assault works.' },
          { text: 'Follow orders — Marines obey.', reward: { readiness: 2 }, say: 'The assault stalls. Casualties mount.' },
          { text: 'Tell him he\'ll get everyone killed.', reward: { readiness: 0 }, say: 'He relieves you of fire team leader. The assault stalls anyway.' }
        ]
      }}
    ])
  },
  theInterpreter: {
    id: 'theInterpreter',
    title: 'The Interpreter',
    run: (c) => runDialogueQuest(c, 'i1_interpreter', 'The Interpreter', [
      { say: 'Your terp — call sign "Phoenix" — is the only one who speaks the dialect in this sector. Insurgents know it.' },
      { ask: {
        prompt: 'A firefight breaks out at the checkpoint. Phoenix is exposed on the berm.',
        choices: [
          { text: 'Pull him behind the HESCO and keep him on comms.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He stays alive. The patrol gets its translations.' },
          { text: 'Tell him to stay down and translate from cover.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Smart. He keeps working.' },
          { text: 'He\'s a local — he knows how to survive.', reward: { readiness: 0 }, say: 'Phoenix didn\'t make it. The patrol goes blind.' }
        ]
      }}
    ])
  },
  theReservist: {
    id: 'theReservist',
    title: 'The Reservist',
    run: (c) => runDialogueQuest(c, 'i3_reservist', 'The Reservist', [
      { say: 'A activated reservist in your squad is forty-two — twice the age of most of the platoon. He\'s been a plumber in Ohio for twenty years.' },
      { ask: {
        prompt: 'The column is pushing through the sandstorm.',
        choices: [
          { text: 'Pair him with a young Marine and share the load.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He keeps pace. Experience counts.' },
          { text: 'Put him on vehicle maintenance — he\'s a plumber.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'The column\'s vehicles stay running.' },
          { text: 'Tell him to keep up or fall out.', reward: { readiness: 1 }, say: 'He falls out. You carry the guilt.' }
        ]
      }}
    ])
  },
  carePackages: {
    id: 'carePackages',
    title: 'Care Packages',
    run: (c) => runDialogueQuest(c, 'i5_carepackages', 'Care Packages', [
      { say: 'Mail call at the Supply Point. Half the care packages have the wrong names — sent to Marines who rotated out weeks ago.' },
      { ask: {
        prompt: 'Your squad is watching.',
        choices: [
          { text: 'Redistribute by need — everyone gets something.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'Morale lifts. The platoon remembers.' },
          { text: 'Send the mislabeled boxes back through supply.', reward: { readiness: 3 }, say: 'By the book. Nobody gets extra.' },
          { text: 'Take the good stuff for your fire team.', reward: { readiness: 0 }, say: 'The squad notices. Trust erodes.' }
        ]
      }}
    ])
  },
  hellHouseQuest: {
    id: 'hellHouseQuest',
    title: 'Hell House',
    run: (c) => runDialogueQuest(c, 'i7_hellhouse', 'Hell House', [
      { say: 'Intel says wounded Marines are trapped inside a fortified house in the Jolan District. The lieutenant wants volunteers for a rescue.' },
      { ask: {
        prompt: 'The house is booby-trapped. Casualties are certain.',
        choices: [
          { text: 'Volunteer — breach and pull them out.', reward: { readiness: 5, stat: 1, statKey: 'strength' }, say: 'You get them out. Two wounded, zero KIA.' },
          { text: 'Suggest breaching from the rear with EOD support.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Smart breach. Everyone comes home.' },
          { text: 'Wait for armor — we\'re not going in blind.', reward: { readiness: 2 }, say: 'Armor arrives. The wounded wait longer.' }
        ]
      }}
    ])
  },
  marineGuard: {
    id: 'marineGuard',
    title: 'The Marine Guard',
    run: (c) => runDialogueQuest(c, 't1_guard', 'The Marine Guard', [
      { say: 'Seven privates and one sergeant — that\'s the entire Marine detachment on Eaton\'s expedition.' },
      { ask: {
        prompt: 'A mercenary laughs: "Eight Marines cannot take a fortress."',
        choices: [
          { text: 'Tell him Marines have taken worse with less.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'The column hears. Morale holds.' },
          { text: 'Let O\'Bannon answer — he outranks you.', reward: { readiness: 3 }, say: 'O\'Bannon handles it. Professional.' },
          { text: 'Say nothing — not your fight yet.', reward: { readiness: 1 }, say: 'The mercenary smirks. Doubt spreads.' }
        ]
      }}
    ])
  },
  eatonsMap: {
    id: 'eatonsMap',
    title: "Eaton's Map",
    run: (c) => runDialogueQuest(c, 't2_map', "Eaton's Map", [
      { say: 'General Eaton\'s map shows a route through terrain no caravan has crossed. The Greeks refuse to follow it.' },
      { ask: {
        prompt: 'Eaton asks the Marines to scout the next ridge.',
        choices: [
          { text: 'Scout ahead and verify the route is passable.', reward: { readiness: 5, stat: 1, statKey: 'intelligence' }, say: 'The route holds. Eaton\'s map is right.' },
          { text: 'Suggest an alternate path the mercenaries will accept.', reward: { readiness: 4, stat: 1, statKey: 'leadership' }, say: 'Compromise route. Column moves.' },
          { text: 'Refuse — you\'re not a surveyor.', reward: { readiness: 1 }, say: 'Someone else went. They found a dead end.' }
        ]
      }}
    ])
  },
  hametsCause: {
    id: 'hametsCause',
    title: "Hamet's Cause",
    run: (c) => runDialogueQuest(c, 't3_hamet', "Hamet's Cause", [
      { say: 'Hamet Karamanli — the exiled pasha — rides with the column. His cause is Eaton\'s cause. The mercenaries are not sure.' },
      { ask: {
        prompt: 'Hamet\'s men demand precedence at the well.',
        choices: [
          { text: 'Back Hamet — his legitimacy holds the alliance together.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'Hamet remembers. The alliance holds.' },
          { text: 'Split the water fairly — Marines mediate.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Fair split. Nobody happy, nobody dead.' },
          { text: 'Let the mercenaries sort it out.', reward: { readiness: 0 }, say: 'A fight breaks out. Water wasted.' }
        ]
      }}
    ])
  },
  promisedPay: {
    id: 'promisedPay',
    title: 'The Promised Pay',
    run: (c) => runDialogueQuest(c, 't4_pay', 'The Promised Pay', [
      { say: 'The mercenaries demand gold before the final march. Eaton has promises, not coin.' },
      { ask: {
        prompt: 'They block the column at Dead March Flats.',
        choices: [
          { text: 'Stand with Eaton — the fleet will pay when Derne falls.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'Eaton\'s resolve wins. Column moves.' },
          { text: 'Offer your own pay to buy a day\'s march.', reward: { readiness: 3 }, say: 'One more day. Derne closer.' },
          { text: 'Side with the mercenaries — Marines need allies.', reward: { readiness: 0 }, say: 'Eaton loses face. Column fractures.' }
        ]
      }}
    ])
  },
  retreatHell: {
    id: 'retreatHell',
    title: 'Retreat Hell',
    run: (c) => runDialogueQuest(c, 'b1_retreat', 'Retreat Hell', [
      { say: 'A French officer advises retreat. Captain Williams\' reply echoes down the line: "Retreat? Hell, we just got here."' },
      { ask: {
        prompt: 'Your squad hears the exchange.',
        choices: [
          { text: 'Pass the word — we hold Belleau Wood.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'The line stiffens. Williams\' words travel.' },
          { text: 'Dig in deeper — show you mean it.', reward: { readiness: 4, stat: 1, statKey: 'strength' }, say: 'Positions improve. Message received.' },
          { text: 'Stay quiet — let the officers decide.', reward: { readiness: 2 }, say: 'You hold. No credit taken.' }
        ]
      }}
    ])
  },
  theNickname: {
    id: 'theNickname',
    title: 'The Nickname',
    run: (c) => runDialogueQuest(c, 'b3_nickname', 'The Nickname', [
      { say: 'German prisoners call the Marines "Teufel Hunden" — Devil Dogs. The name is spreading.' },
      { ask: {
        prompt: 'A correspondent asks what it means.',
        choices: [
          { text: 'Tell him it means we bite and we don\'t let go.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'The story runs. Devil Dogs forever.' },
          { text: 'Say it\'s German for "damned fools."', reward: { readiness: 3 }, say: 'Laughs in the trench. Morale up.' },
          { text: 'Refuse to talk to press.', reward: { readiness: 1 }, say: 'He writes it anyway.' }
        ]
      }}
    ])
  },
  muleSkinner: {
    id: 'muleSkinner',
    title: 'The Mule Skinner',
    run: (c) => runDialogueQuest(c, 'n1_mule', 'The Mule Skinner', [
      { say: 'The mule skinner is drunk and the train won\'t move. Ocotal needs those supplies by dawn.' },
      { ask: {
        prompt: 'The lieutenant looks at you.',
        choices: [
          { text: 'Sober him up and walk the lead mule yourself.', reward: { readiness: 5, stat: 1, statKey: 'endurance' }, say: 'Train moves. Ocotal gets resupply.' },
          { text: 'Find another skinner in the village.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Local hired. Train moves.' },
          { text: 'Wait for him to sleep it off.', reward: { readiness: 1 }, say: 'Dawn passes. Ocotal waits.' }
        ]
      }}
    ])
  },
  coffeeAlcalde: {
    id: 'coffeeAlcalde',
    title: 'Coffee With the Alcalde',
    run: (c) => runDialogueQuest(c, 'n3_coffee', 'Coffee With the Alcalde', [
      { say: 'The alcalde invites the patrol to coffee at the plantation. Intel says Sandinistas watch the road.' },
      { ask: {
        prompt: 'Accept the invitation or stay on the ridge?',
        choices: [
          { text: 'Accept — rapport wins more than rifles.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'The alcalde talks. Intel flows both ways.' },
          { text: 'Send one Marine with gifts, keep the patrol on the ridge.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Smart. Relationship without exposure.' },
          { text: 'Decline — coffee is a trap.', reward: { readiness: 1 }, say: 'The alcalde is offended. Village goes quiet.' }
        ]
      }}
    ])
  },
  waterWell: {
    id: 'waterWell',
    title: 'The Water Well',
    run: (c) => runDialogueQuest(c, 's1_well', 'The Water Well', [
      { say: 'The feeding station well is dry. Two thousand people are in the queue.' },
      { ask: {
        prompt: 'Engineers say the pump needs twelve hours.',
        choices: [
          { text: 'Ration what\'s left and organize the queue by need.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'No riot. Pump fixed by nightfall.' },
          { text: 'Truck water from the port until the pump runs.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Convoy runs. Crowd calms.' },
          { text: 'Close the station until the pump works.', reward: { readiness: 0 }, say: 'Riot at the wire. Casualties.' }
        ]
      }}
    ])
  },
  kidAtWire: {
    id: 'kidAtWire',
    title: 'The Kid at the Wire',
    run: (c) => runDialogueQuest(c, 's2_kid', 'The Kid at the Wire', [
      { say: 'A kid keeps coming to the wire asking for food. Tonight he\'s alone. No adults visible.' },
      { ask: {
        prompt: 'SOP says don\'t engage at the wire after dark.',
        choices: [
          { text: 'Pass food through the wire and send him back.', reward: { readiness: 5, stat: 1, statKey: 'leadership' }, say: 'He goes. You sleep uneasy but clear.' },
          { text: 'Call the terp to find his family.', reward: { readiness: 4, stat: 1, statKey: 'intelligence' }, say: 'Family found. Kid home.' },
          { text: 'Wave him off — rules are rules.', reward: { readiness: 1 }, say: 'He leaves. You never know if he ate.' }
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
