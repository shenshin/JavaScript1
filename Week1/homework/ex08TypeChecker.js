'use strict';

// Create a function that fulfills the following requirements:
//
//     Takes in 2 arguments
// Check the data type of each
// Compares each data type
//     Logs to the console the message SAME TYPE if they are the same type. If they are different types log Not the same....
function compareTypes(a, b) {
    let sameType = typeof a === typeof b
    console.log(sameType ? "SAME TYPE" : "Not the same...")
    // return sameType
}
// Follow the steps:
//
//     Declare 4 variables: 2 must be strings and 2 must be objects
let string1 = "Aleks"
let string2 = "Shenshin"
let object1 = {firstName: "Aleks", familyName: "Shenshin"}
let object2 = {firstName: "Алесь", familyName: "Шеншин"}

// Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
// Find out how to check the type of a variable
// Write 2 console.log statements to log the type of 2 variables, each with a different data type
//     Now compare the types of your different variables with one another
// Log Not the same... when the types are different
compareTypes(string1, string2)
compareTypes(string1, object1)
compareTypes(string1, object2)
compareTypes(string2, object1)
compareTypes(string2, object2)
compareTypes(object1, object2)
