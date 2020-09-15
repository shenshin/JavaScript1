// usage:
// $ node ex04Shopping.js

'use strict';

// Let's do some grocery shopping! We're going to get some things to cook dinner with.
// However, you like to spend your money and always buy too many things.
// So when you have more than 3 items in your shopping cart the first item gets taken out.

// Create an array called shoppingCart that holds the following strings: "bananas" and "milk"
// Write a function named addToShoppingCart
// It takes 1 argument: a grocery item (string)
// Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
// Loops through the array in order to list out the items
// Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
// Call the function 3 times, each time with a different string as the argument.
// const shoppingCart = ['bananas', 'milk'];

///////// If I declare shoppingCart as const, my function would not able to modify it,
///////// so I copy shoppingCart to the other 'let' variable 'mutableShoppingCard'
///////// Another way to do it would be to pass 'shoppingCart' to the function as second parameter
///////// and that would be much better design than to modify some external variable inside function

const shoppingCart = ['bananas', 'milk'];
let mutableShoppingCard = shoppingCart;

function addToShoppingCart(groceryItem) {
  mutableShoppingCard.push(groceryItem);

  if (mutableShoppingCard.length > 3) {
    mutableShoppingCard = mutableShoppingCard.slice(-3);
  }

  const outputString = `You bought ${mutableShoppingCard.join(', ')}!`;
  // this is the way to do same by means of for-loop
  // let outputString = 'You bought ';
  // for (let item of mutableShoppingCard) {
  //   outputString += item + ', ';
  // }
  // remove last two characters
  // outputString = outputString.slice(0, -2);
  // outputString += '!';
  console.log(outputString);
}

// // Expected output
addToShoppingCart('chocolate'); // Returns "You bought bananas, milk, chocolate!"
addToShoppingCart('waffles'); // Returns "You bought milk, chocolate, waffles!"
addToShoppingCart('tea'); // Returns "You bought chocolate, waffles, tea!"
