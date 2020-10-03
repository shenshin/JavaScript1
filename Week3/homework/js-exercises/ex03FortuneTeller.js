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

  const numberOfChildren = getRandomItemFromArray(numbersOfChildren);
  const location = getRandomItemFromArray(locations);
  const partnerName = getRandomItemFromArray(partnerNames);
  const jobTitle = getRandomItemFromArray(jobTitles);
  // check if profession starts with vowel. In this case use 'an' article and otherwise 'a'
  const jobTitleWithArticle = `a${/^[aeiou]/i.test(jobTitle) ? 'n' : ''} ${jobTitle}`;
  // Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
  return `You will be ${jobTitleWithArticle} in ${location}, married to 
  ${partnerName} with ${numberOfChildren} kid${numberOfChildren > 1 ? 's' : ''}.`;
}
function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
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
