'use strict';
// Exercise 10: Compare arrays
//
// Follow the steps:
//
// Declare 2 variables, that each hold an array. The
// first array should have 4 items, the second 7 items
// Find out how to get the length of each array.
const array1 = ["hello", 123, true, { name: "Noah" }]
const array2 = [0, 1, 2, 3, 4, 5, 6]

// Write a console.log statement that shows the length of each array
console.log(`The length of the array1 is ${array1.length}`)
console.log(`The length of the array2 is ${array2.length}`)

// Write a conditional statement that checks if both are of
// equal length. If they are, log to the console They
// are the same!, if not log Two different sizes
console.log (
    array1.length === array2.length ?
    "Arrays are of the same length" :
    "Arrays are of different sizes"
)
