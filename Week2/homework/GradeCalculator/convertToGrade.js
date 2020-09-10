// usage:
// node convertToGrade.js 78
// converts percent to American grade letter

'use strict'
// get number from the command line
let number = process.argv[2]
if (number === undefined) {
    number = 60
}
/* Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%) */
function convertNumberToGrade(number) {
    let grade = '?'
    if (number < 50) {
        grade = 'F'
    } else if (number >= 50 && number < 60) {
        grade = 'E'
    } else if (number >= 60 && number < 70) {
        grade = 'D'
    } else if (number >= 70 && number < 80) {
        grade = 'C'
    } else if (number >= 80 && number < 90) {
        grade = 'B'
    } else {
        grade = 'A'
    }
    return `You got a ${grade} (${number}%)!`
}
// print out the result to console
console.log(convertNumberToGrade(number))