// usage:
// $ node ex02DogYears.js 1

'use strict';

// You know how old your dog is in human years, but what about dog years? Let's calculate it!

// Write a function named calculateDogAge.
// It takes 1 argument: your (fictional) puppy's age (number).
// Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
// Call the function three times with different sets of values.
// // Expected output
// calculateDogAge(1); // Returns "Your doggie is 7 years old in dog years!"
// calculateDogAge(2); // Returns "Your doggie is 14 years old in dog years!"
// calculateDogAge(3); // Returns "Your doggie is 21 years old in dog years!"

// get dog age from command line
let dogAge = process.argv[2];
if (dogAge === undefined) {
  dogAge = 1;
}

function calculateDogAge(age) {
  const dogAge = Math.round(age * 7);
  return `Your doggie is ${dogAge} years old in dog years!`;
}

console.log(calculateDogAge(dogAge));
// console.log(calculateDogAge(dogAge + 1));
// console.log(calculateDogAge(dogAge + 2));
