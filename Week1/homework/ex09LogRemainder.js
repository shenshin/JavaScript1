'use strict';

// Answer the following questions. For each, write in comments
// what the answer is followed by how you came to that conclusion:
//

// If x equals 7, and the only other statement is x = x % 3,
// what would be the value of x after the calculation?
let x = 7
x = x % 3
// (int)7 / 3 == 2 (2 * 3 == 6) and the remainder is 1
console.log(`The remainder of the division of 7 by 3 is ${x}`)

// If y equals 21, and the only other statement is y = y % 4,
// what would be the value of y after the calculation?
let y = 21
y = y % 4
// (int)21 / 4 == 5 (5 * 4 == 20) and the remainder is 1
console.log(`The remainder of the division of 21 by 4 is ${y}`)

// If z equals 13, and the only other statement is z = z % 2,
// what would be the value of z after the calculation?
let z = 13
z = z % 2
// (int)13 / 2 == 6 (6 * 2 == 12) and the remainder is 1
console.log(`The remainder of the division of 13 by 2 is ${z}`)