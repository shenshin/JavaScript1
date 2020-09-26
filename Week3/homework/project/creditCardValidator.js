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
  if (numbersArray.every(number => number === numbersArray[0])) {
    errorsArray.push('contain at least 2 different types of numbers');
  }
  // check if every element of array is a digit
  if (!numbersArray.every(number => Number.isFinite(parseInt(number)))) {
    errorsArray.push('contain only numbers')
  }
  // check if the last element is even
  if (parseInt(numbersArray[numbersArray.length - 1]) % 2 !== 0) {
    errorsArray.push('have the last digit even');
  }
  // check if the sum of all elements is more than 16
  if (
    numbersArray.reduce(
      (accumulativeValue, currentValue) => 
      parseInt(accumulativeValue) + parseInt(currentValue) || 0
      , 0
    ) <= 16
  ) {
    errorsArray.push('have the sum of all digits more than 16');
  }
  // print the result of input evaluation to the console
  if (errorsArray.length === 0) {
    return `Success! The input ${cardNumber} is a valid credit card number!`;
  } else {
    // I don't want to console.log inside the function, but
    // I want my function to return a string. For this reason I
    // convert array of strings to string for further return
    return (
      errorsArray
        // convert array to string using template
        .reduce(
          (outputString, nextError) =>
            outputString +
            `Invalid! The input ${cardNumber} should ${nextError}!\n`,
          '',
        )
        // remove last '\n' from the resulting string
        .slice(0, -1)
    );
  }
}
// generate all possible errors:
console.log(validateCreditNumber('0'));
/* Invalid! The input 0 should be 16 digits long!
Invalid! The input 0 should contain at least 2 different types of numbers!
Invalid! The input 0 should have the sum of all digits more than 16! */
console.log(validateCreditNumber('  '));
/* Invalid! The input    should be 16 digits long!
Invalid! The input    should contain at least 2 different types of numbers!
Invalid! The input    should contain only numbers!
Invalid! The input    should have the last digit even!
Invalid! The input    should have the sum of all digits more than 16! */
console.log(validateCreditNumber('a'));

console.log(validateCreditNumber('6666666666661666'));
// output: Success! The input 6666666666661666 is a valid credit card number!
