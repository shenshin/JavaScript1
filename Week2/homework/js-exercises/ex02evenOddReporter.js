'use strict';

// Report whether or not a number is odd/even!

// Create a for loop, that iterates from 0 to 20.
// Create a conditional statement that checks if the value of the counter variable is odd or even.
// If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
// If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.

for (let counter = 0; counter <= 20; counter++) {
  console.log(
    counter % 2 !== 0
      ? `The number ${counter} is odd!`
      : `The number ${counter} is even!`,
  );
}
