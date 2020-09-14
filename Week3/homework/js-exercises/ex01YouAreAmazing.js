// usage:
// $ node ex01YouAreAmazing.js 'YourName'

'use strict';

// task:
// There is no better way to start your day then with a compliment!
// Write a function named giveCompliment
// It takes 1 argument: your name
// Inside the function define a variable that holds an array, compliments, with 10 strings. Each string should be a compliment, like "great", "awesome"
// Write code that randomly selects a compliment
// Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
// Call the function three times, giving each function call the same argument: your name.
// // Expected output
// giveCompliment('Noer'); // Returns "You are amazing, Noer!"
// giveCompliment('Noer'); // Returns "You are great, Noer!"
// giveCompliment('Noer'); // Returns "You are supersmart, Noer!"

// get name from command line
let name = process.argv[2];
if (name === undefined) {
  name = 'Noer';
}

function giveCompliment(yourName) {
  const compliments = [
    'amazing',
    'incredible',
    'great',
    'superb',
    'admirable',
    'remarkable',
    'beautiful',
    'unique',
    'special',
    'wonderful',
  ];
  // get random number from 0 to 9
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return `You are ${compliments[randomIndex]}, ${yourName}!`;
}

// Call the function three times, giving each function call the same argument: your name.
console.log(giveCompliment(name));
console.log(giveCompliment(name));
console.log(giveCompliment(name));
