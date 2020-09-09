'use strict';

// Follow the steps:

// Add the variable to your file.

let myString = 'hello,this,is,a,difficult,to,read,sentence';

// Log the length of myString.
console.log('String length:');
console.log(myString.length);

// The commas make that the sentence is quite hard to read. Find a
//way to remove the commas from the string and replace them with spaces. (use Google!)

// Using regular expression
myString = myString.replace(/,/g, ' ');

// After replacing the commas, log myString to see if you succeeded.

console.log('\nReplacement by RegExp:');
console.log(myString);

myString = 'hello,this,is,a,difficult,to,read,sentence';

// Using split-join
myString = myString.split(',').join(' ');
console.log('\nReplacement by arrays manipulation:');
console.log(myString);

// Expected result in the console: hello this is a difficult to read sentence
