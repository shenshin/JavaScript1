// usage:
// node convertToGrade.js 78
// converts percent to American grade letter

'use strict';

/**
 * Converts percentage to grade in American grading system
 * @param  {number} percentage The number in percent
 * @return {string} American grade letter
 */
function convertNumberToGrade(percentage) {
  const number = parseFloat(percentage);
  // Throw an error if it was impossible to convert parameter to float
  if (number === undefined || !isFinite(number)) throw percentage;
  // Now I am sure that I'm handling a float number
  let grade = '?';
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
  return grade;
}

// get number from the command line
let number = process.argv[2];

// catching illegal parameter from command line
try {
  const grade = convertNumberToGrade(number);
  console.log(`You got a ${grade} (${number}%)!`);
} catch (illegalParameter) {
  console.log(
    illegalParameter === undefined
      ? 'Please enter percent number!'
      : `Wrong percent value: '${illegalParameter}'. Put number instead.`,
  );
}
