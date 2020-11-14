// Horoscope generator
const Horoscope = {
  signs: ['the sun', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'kwik-e-mart', 'krusty clown'],
  fates: [
  `You're having good luck`,
  `Someone near you will betray you`,
  `You're going to have a fight with a close friend`,
  `You're not having good luck at all.`,
  `You have lots of questions without answering.`,
  `A great love of your life will leave you.`,
  `You are about to find the love of your life.`,
  `You're going to let a great opportunity slip out of your hands.`,
  `You're going to discover a great power inside you.`
  ],
  actions: [
  'trust no one.',
  'be careful with what you say this week.',
  'be more trustworthy.',
  'check your inner circle for jealousy.',
  'question your life decision.',
  'question who you trust.',
  `be careful who's always hearing.`,
  'spend more money on your love ones.',
  'not worry about horoscopes.',
  'believe more in yourself.',
  'not believe everything you hear.'
  ],

  // Reads the horoscope and outputs the results.
  read() {
    // Randomly selects a number within the range of each array.
    const signIndex = Math.floor(Math.random() * this.signs.length);
    const fateIndex = Math.floor(Math.random() * this.fates.length);
    const actionIndex = Math.floor(Math.random() * this.actions.length);
  
    // Finds each value in its corresponding array.
    const sign = this.signs[signIndex];
    const fate = this.fates[fateIndex];
    const action = this.actions[actionIndex];

    console.log(`Your sign is ${sign}.`);
    console.log(`${fate}`);
    console.log(`You should ${action}`);
  }
}

Horoscope.read();