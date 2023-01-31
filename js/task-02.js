const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const array = []

ingredients.forEach(ingredient => {
  const ingredientWithLi = document.createElement("li")
  ingredientWithLi.textContent = ingredient
  ingredientWithLi.className = "item"
  array.push(ingredientWithLi)
}) 

console.log(array);
document.querySelector("ul").append(...array)

// // const array = []
// ingredients.forEach(ingredient => {
//   let addLi = document.createElement("li")
//   addLi.textContent = ingredient 
//   console.log(addLi);
//   // addLi.className = item
//   // array.push(ingredient); 
//   console.log(document.querySelector("#ingredients").append(ingredient));
// })
// // consol.log(document.querySelector("#ingredients"))
