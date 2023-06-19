
const itemAll = document.querySelectorAll('.item');

console.log("Number of categories:", itemAll.length);


itemAll.forEach(function(item) {
    console.log("Category:", item.firstElementChild.textContent),
    console.log("Elements:", item.lastElementChild.children.length);
});
