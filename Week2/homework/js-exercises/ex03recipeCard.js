'use strict';

// Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
// Declare a variable that holds an empty object literal (your meal recipe).

let mealRecipe = {};

// Give the object 3 properties:
// a title (string), a servings (number) and
// an ingredients (array of strings) property.

mealRecipe.title = 'Omelette';
mealRecipe.servings = 2;
mealRecipe.ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'];

// additional dictionary to convert given property names
// to printable strings

let keyNames = {
  title: 'Meal name',
  servings: 'Serves',
  ingredients: 'Ingredients',
};

// Log each property out separately, using a loop
// (for, while or do/while)

for (let key in mealRecipe) {
  let element = mealRecipe[key];
  let string = '';
  if (typeof element === 'object') {
    string = element.join(', ');
  } else {
    string = element;
  }
  console.log(`${keyNames[key]}: ${string}`);
}
// Expected result:

// Meal name: Omelette
// Serves: 2
// Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
