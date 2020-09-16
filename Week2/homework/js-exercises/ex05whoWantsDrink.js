'use strict';

// You're at a party and you feel thirsty! However, you've got
// 5 friends who are also in need of a drink. Let's go get them a drink.

// Declare a variable that holds an empty array, called drinkTray.

let drinkTray = [];

// There are 3 different types of drinks:

const drinkTypes = ['cola', 'lemonade', 'water'];
// Create a loop that runs 5 times. On each iteration, push a drink
// into the drinkTray variable. The drinkTray can only hold
// at most two instances of the same drink type, for example it can
// only hold 2 colas, 2 lemonades, 2 waters.
// // Expected result:
// const drinkTray = ['cola', 'cola', 'lemonade', 'lemonade', 'water'];

// // 'Hey guys, I brought a cola, cola, lemonade, lemonade, water!'
// If there are already two instances of a drinkType then start with
// the next drink in the array.
// Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
// Log to the console:
// "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!"
// (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")

for (let i = 0; i < 5; i++) {
  // I translate indices of drinkTray[] to the indices of drinkTypes[] as follows:
  // 0 -> 0, 1 -> 0, 2 -> 1, 3 -> 1, 4 -> 2
  drinkTray[i] = drinkTypes[Math.floor(i / 2)];
}
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);
