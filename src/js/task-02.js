const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector(`#ingredients`);
const itemElem = ingredients.map((ingredient) => {
  const itemLi = document.createElement(`li`);
  itemLi.textContent = ingredient;
  itemLi.classList.add(`item`);
  return itemLi;
});
ulElem.append(...itemElem);  
console.log(ulElem);

