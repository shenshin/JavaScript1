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

const shoppingCart = ['bananas', 'milk'];
// clone array
let mutableShoppingCard = [...shoppingCart];

function addToShoppingCart(groceryItem) {
  mutableShoppingCard.push(groceryItem);
  if (mutableShoppingCard.length > 3) {
    mutableShoppingCard = mutableShoppingCard.slice(-3);
  }
  return `You bought ${mutableShoppingCard.join(', ')}!`;
}
// But I suggest to make a class here. 
// This is a perfect case to use classes, methods, properties etc.
// The code becomes very neat and readable:
class ShoppingCart {
  /**
   * @param {string[]} groceryItems
   */
  constructor(groceryItems) {
    if (!Array.isArray(groceryItems))
      throw new TypeError(
        "parameter 'grosseryItems' must be an array of strings",
      );
    this.groceryItems = [...groceryItems]; // clone array
  }
  /**
   * @param {string} groceryItem
   * @returns {string}
   */
  add(groceryItem) {
    this.groceryItems.push(groceryItem)
    if (this.groceryItems.length > 3) {
      this.groceryItems = this.groceryItems.slice(-3);
    }
    return this.toString()
  }
  toString() {
    return `You bought ${this.groceryItems.join(', ')}!`;
  }
}
const shoppingCartObject = new ShoppingCart(shoppingCart);
console.log(shoppingCartObject.add('chocolate'))
console.log(shoppingCartObject.add('waffels'))
console.log(shoppingCartObject.add('milk'))

// // Expected output
//console.log(addToShoppingCart('chocolate')); // Returns "You bought bananas, milk, chocolate!"
//console.log(addToShoppingCart('waffles')); // Returns "You bought milk, chocolate, waffles!"
//console.log(addToShoppingCart('tea')); // Returns "You bought chocolate, waffles, tea!"
