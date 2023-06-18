function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChangeColorElem = document.querySelector('.change-color');
const nameOfColorElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');


const onButtonChangeColorElem = () => {
  nameOfColorElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = getRandomHexColor();
}


buttonChangeColorElem.addEventListener('click', onButtonChangeColorElem);
