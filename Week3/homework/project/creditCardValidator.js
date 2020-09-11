'use strict';

// In this project you'll write a function, called
// validateCreditNumber, that validates whether or not
// a credit card number is valid.

// Here are the criteria for a valid number:

// Input must be 16 characters
// All characters must be numbers
// At least two different numbers should be represented
// The last number must be even
// The sum of all the numbers must be greater than 16

function validateCreditNumber(number) {
  let numbersArray = number.split('');
  let errors = [];
  // check array length
  if (numbersArray.length != 16) {
    errors.push('be 16 digits long');
  }
  // check if all elements of array are equal to to it's first element
  if (numbersArray.every((x) => x === numbersArray[0])) {
    errors.push('contain at least 2 different types of numbers');
  }
  // check if every element of array is a digit
  if (!numbersArray.every((x) => /^[0-9]$/.test(x))) {
    errors.push('contain only numbers');
  }
  // check if the last element is even
  if (numbersArray[numbersArray.length - 1] % 2 != 0) {
    errors.push('have the last digit even');
  }
  // check if the sum of all elements is more than 16
  if (
    numbersArray.reduce((accum, curr) => parseInt(accum) + parseInt(curr)) <= 16
  ) {
    errors.push('have the sum of all digits more than 16');
  }
  // print the result of input evaluation to the console
  if (errors.length == 0) {
    console.log(`Success! The input ${number} is a valid credit card number!`);
  } else {
    errors.forEach((error) =>
      console.log(`Invalid! The input ${number} should ${error}!`),
    );
  }
}

// Expected output

validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
validateCreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
