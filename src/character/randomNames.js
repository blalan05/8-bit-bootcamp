const MALE_NAMES = [
  'James Martinez', 'Michael Chen', 'David Thompson', 'Robert Garcia',
  'William Johnson', 'Christopher Lee', 'Daniel Wilson', 'Matthew Brown',
  'Anthony Davis', 'Joshua Miller', 'Andrew Taylor', 'Ryan Anderson'
];

const FEMALE_NAMES = [
  'Sarah Martinez', 'Emily Chen', 'Jessica Thompson', 'Ashley Garcia',
  'Amanda Johnson', 'Jennifer Lee', 'Nicole Wilson', 'Michelle Brown',
  'Stephanie Davis', 'Elizabeth Miller', 'Rebecca Taylor', 'Lauren Anderson'
];

export function getRandomName(gender = 'male') {
  const pool = gender === 'female' ? FEMALE_NAMES : MALE_NAMES;
  return pool[Math.floor(Math.random() * pool.length)];
}
