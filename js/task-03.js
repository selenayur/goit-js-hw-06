const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//поиск ul
const galleryElem = document.querySelector('ul.gallery');
//console.log(galleryElem);
//новый массив из лишек в одну строку
const layout = images.map(({ url, alt }) =>
  `<li>
    <img src = ${url} alt = ${alt} width = "300" height = "200"></img>
  </li>`
).join('');
//console.log(layout);
//добавление строки с HTML-тегами
galleryElem.insertAdjacentHTML('beforeend', layout);