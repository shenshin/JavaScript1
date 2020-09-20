// usage:
// node convertNumberToGrade.js 78
// converts percent to American grade letter

'use strict';

/**
 * Converts percentage to grade in American grading system
 * @param  {number} percentage the number in percent
 * @return {string} message with an American grade letter
 * @throws use Error.message to get an error info
 */
function convertNumberToGrade(percentage) {
  // Throwing errors:
  // Throw an error if there is no value
  if (percentage === undefined) {
    throw new Error('Please enter a number in percent!');
  }
  // Trying to convert received parameter to a float
  const number = parseFloat(percentage);
  // Throw an error it was impossible to convert parameter to float
  if (!isFinite(number)) {
    throw new Error(
      `Wrong percent value: '${percentage}'. Put a number instead.`,
    );
  }
  // Throw an error if the number is in a wrong range
  if (number < 0 || number > 100) {
    throw new Error(
      `Illegal percentage: ${percentage}%. Please enter a number between 0 and 100.`,
    );
  }
  // Now I am sure that I'm handling a legal float number
  let grade = '';
  if (number < 50) {
    grade = 'F';
  } else if (number >= 50 && number < 60) {
    grade = 'E';
  } else if (number >= 60 && number < 70) {
    grade = 'D';
  } else if (number >= 70 && number < 80) {
    grade = 'C';
  } else if (number >= 80 && number < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return `You got a ${grade} (${number}%)!`;
}

// get number from a command line
let number = process.argv[2];

// Trying to convert a number from a command line.
// If conversion fails, catching errors from the function
try {
  console.log(convertNumberToGrade(number));
} catch (error) {
  console.log(error.message);
}
