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

function validateCreditNumber(cardNumber) {
  const numbersArray = cardNumber.split('');
  let errorsArray = [];
  // check array length
  if (numbersArray.length !== 16) {
    errorsArray.push('be 16 digits long');
  }
  // check if all elements of array are equal to it's first element
  if (numbersArray.every((number) => number === numbersArray[0])) {
    errorsArray.push('contain at least 2 different types of numbers');
  }
  // check if every element of array is a digit
  if (!numbersArray.every((number) => /^[0-9]$/.test(number))) {
    errorsArray.push('contain only numbers');
  }
  // check if the last element is even
  if (numbersArray[numbersArray.length - 1] % 2 !== 0) {
    errorsArray.push('have the last digit even');
  }
  // check if the sum of all elements is more than 16
  if (
    numbersArray.reduce(
      (accumulativeValue, currentValue) =>
        parseInt(accumulativeValue) + parseInt(currentValue),
    ) <= 16
  ) {
    errorsArray.push('have the sum of all digits more than 16');
  }
  // print the result of input evaluation to the console
  if (errorsArray.length === 0) {
    console.log(
      `Success! The input ${cardNumber} is a valid credit card number!`,
    );
  } else {
    errorsArray.forEach((error) =>
      console.log(`Invalid! The input ${cardNumber} should ${error}!`),
    );
  }
}

// Expected output

validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
validateCreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
