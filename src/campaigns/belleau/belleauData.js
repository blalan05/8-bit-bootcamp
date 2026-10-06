/**
 * Belleau Wood expedition — Devil Dogs, 1918.
 * locationName must match src/maps/maps.json (belleauwood map).
 */

export const BELLEAU_OPERATIONS = [
  {
    id: 1,
    name: 'Into the Line',
    theme: 'Operation 1 — Ship out, dig in, night watch',
    days: [
      {
        id: 'b1d1',
        title: 'Into the Line',
        briefing: 'Report to The Wheat Field. Marines deploy to the Marne front. Man your stations.',
        locationName: 'The Wheat Field',
        activityId: 'shipOut',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'b1d2',
        title: 'Dig In',
        briefing: 'Report to Trenchline. Establish fighting positions before the German advance.',
        locationName: 'Trenchline',
        activityId: 'foxholeDig',
        stats: ['strength', 'endurance']
      },
      {
        id: 'b1d3',
        title: 'Night Watch',
        briefing: 'Report to Trenchline. Movement in no-man\'s-land — spot hostiles before they probe the line.',
        locationName: 'Trenchline',
        activityId: 'nightWatch',
        stats: ['dexterity', 'intelligence']
      }
    ],
    sideQuests: [
      { id: 'b1_retreat', title: 'Retreat Hell', availableAfterDay: 1, locationName: 'Command Post', questId: 'retreatHell' }
    ]
  },
  {
    id: 2,
    name: 'The Wheat Field',
    theme: 'Operation 2 — Charge the field, overwatch, casualties',
    days: [
      {
        id: 'b2d1',
        title: 'Charge the Wheat Field',
        briefing: 'Report to The Wheat Field. Force the pace across open ground under machine-gun fire.',
        locationName: 'The Wheat Field',
        activityId: 'paceRunner',
        stats: ['endurance']
      },
      {
        id: 'b2d2',
        title: 'Overwatch',
        briefing: 'Report to Hill 142. Steady your aim and clear the German approaches.',
        locationName: 'Hill 142',
        activityId: 'steadyAim',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'b2d3',
        title: 'Casualty Collection',
        briefing: 'Report to Aid Station. Marines are coming off the field. Triage in the correct order.',
        locationName: 'Aid Station',
        activityId: 'fieldMedic',
        stats: ['intelligence']
      }
    ]
  },
  {
    id: 3,
    name: 'Gas Attack',
    theme: 'Operation 3 — Mask up, buddy aid, night push',
    days: [
      {
        id: 'b3d1',
        title: 'Gas Attack',
        briefing: 'Report to The Ravine. German gas on the line — mask up on GAS! GAS! GAS!',
        locationName: 'The Ravine',
        activityId: 'gasAlarm',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'b3d2',
        title: 'Buddy Aid',
        briefing: 'Report to Aid Station. Treat gas casualties in the correct order.',
        locationName: 'Aid Station',
        activityId: 'buddyAid',
        stats: ['intelligence']
      },
      {
        id: 'b3d3',
        title: 'Night Push',
        briefing: 'Report to The Wood. Push through the forest at night. Freeze when illumination pops.',
        locationName: 'The Wood',
        activityId: 'nightMove',
        stats: ['dexterity']
      }
    ],
    sideQuests: [
      { id: 'b3_nickname', title: 'The Nickname', availableAfterDay: 1, locationName: 'Hunting Lodge', questId: 'theNickname' }
    ]
  },
  {
    id: 4,
    name: 'The Wood Itself',
    theme: 'Operation 4 — Bayonets, close quarters, mortars',
    days: [
      {
        id: 'b4d1',
        title: 'Bayonets in the Wood',
        briefing: 'Report to The Wood. Fix bayonets and clear the German positions in the trees.',
        locationName: 'The Wood',
        activityId: 'bayonetCourse',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'b4d2',
        title: 'Close Quarters',
        briefing: 'Report to Hunting Lodge. Room-to-room fighting in the lodge ruins.',
        locationName: 'Hunting Lodge',
        activityId: 'pugilDuel',
        stats: ['strength', 'dexterity']
      },
      {
        id: 'b4d3',
        title: 'Mortars on the Line',
        briefing: 'Report to Command Post. Bracket the German positions in the wood.',
        locationName: 'Command Post',
        activityId: 'mortarBracket',
        stats: ['intelligence', 'dexterity']
      }
    ]
  },
  {
    id: 5,
    name: 'Devil Dogs',
    theme: 'Operation 5 — Final assault, letters home, honors',
    days: [
      {
        id: 'b5d1',
        title: 'Final Assault',
        briefing: 'Report to Lucy-le-Bocage. Final push to clear the wood. Qualify across three positions.',
        locationName: 'Lucy-le-Bocage',
        activityId: 'rifleQual',
        stats: ['dexterity', 'intelligence']
      },
      {
        id: 'b5d2',
        title: 'Letters Home',
        briefing: 'Report to Command Post. Write letters home after Belleau Wood. Choose your words carefully.',
        locationName: 'Command Post',
        activityId: 'writeLetter',
        stats: ['leadership', 'intelligence']
      },
      {
        id: 'b5d3',
        title: 'Campaign Honors',
        briefing: 'Report to The Wheat Field. Formation in the field. Teufel Hunden — earn your expedition honors.',
        locationName: 'The Wheat Field',
        activityId: 'graduationParade',
        stats: ['leadership']
      }
    ]
  }
];
