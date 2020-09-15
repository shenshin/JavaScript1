// usage:
// $ node ex05TotalCost.js

'use strict';

// You want to buy a couple of things from the supermarket to prepare for a party.
// After scanning all the items the cashier wants to give you the totalPrice price,
// but the machine is broken! Let's write her a function that does it for her instead!

// Create an object named cartForParty with 5 properties. Each property should be
// a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)

// Write a function called calculateTotalPrice
// It takes 1 argument: an object that contains properties that only contain number values

function calculateTotalPrice(cart) {
  let totalPrice = 0.0;

  // Loop through the object and add all the number values together
  for (let item in cart) {
    totalPrice += cart[item];
  }
  // Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
  console.log(`Total: €${totalPrice}`);
}

// Call the function 1 time, giving it the object cartForParty as an argument
// const cartForParty = { ... }

const cartForParty = {
  beers: 3.6,
  chips: 1.4,
  bread: 2.75,
  chees: 5.99,
  squid: 7.15,
};

// // Expected output
calculateTotalPrice(cartForParty); // Returns "Total: €10.75"
