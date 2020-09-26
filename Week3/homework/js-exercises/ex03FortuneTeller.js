// usage:
// js-exercises $ node ex03FortuneTeller.js
'use strict';
// Why pay a fortune teller when you can just program your fortune yourself?

// Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
const numChildren = ['1', '2', '3', '4', '5'];
const partnerNames = ['Merel', 'Nel', 'Sarah', 'Dasey', 'Mariana'];
const locations = [
  'Eindhoven',
  'Maastricht',
  'Nijmegen',
  'Utrecht',
  'Rotterdam',
];
const jobs = ['programmer', 'accountant', 'unemployed', 'priest', 'scientist'];

// Write a function named tellFortune.
// It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
function tellFortune(numbersOfChildren, partnerNames, locatons, jobTitles) {
  // question: does JS copy arrays? Will container include copies or references?
  const arraysContainer = [
    jobTitles,
    locatons,
    partnerNames,
    numbersOfChildren,
  ];
  let returnValues = [];
  // collect random element from all input arrays into one array returnValues[]
  for (const array of arraysContainer) {
    // Randomly select values from the arrays.
    const randomIndex = Math.floor(Math.random() * array.length);
    returnValues.push(array[randomIndex]);
  }
  // Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
  return `You will be a${
    // check if profession starts with vowel. In this case use 'an' article and otherwise 'a'
    /[aeiou]/i.test(returnValues[0][0]) ? 'n' : ''
  } ${returnValues[0]} in ${returnValues[1]}, married to ${
    returnValues[2]
    // choose whether to use 'kid' in single or plural
  } with ${returnValues[3]} kid${returnValues[3] > 1 ? 's' : ''}.`;
}

// Call the function 3 times, by passing the arrays as the argument.

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));

// js-exercises $ node ex03FortuneTeller.js
// The output is:
// You will be a priest in Rotterdam, married to Sarah with 4 kids.
// You will be an unemployed in Rotterdam, married to Dasey with 1 kid.
// You will be a scientist in Rotterdam, married to Sarah with 5 kids.
