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
  let addLi = document.createElement("li")
  addLi.textContent = ingredient 
  addLi.className = item
  array.push(ingredient);  
})
consol.log(document.querySelector("#ingredients").append(...array))
