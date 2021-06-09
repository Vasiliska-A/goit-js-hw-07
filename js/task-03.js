//Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
const itemList = document.querySelector("ul");
itemList.classList.add("list");

const imgList = [];

for (let i = 0; i < images.length; i += 1) {
  const src = images[i].url;
  const alt = images[i].alt;
  const img = `<li class ="list-item"><img src="${src}" alt="${alt}" width = "640" height = "350"></li>`;

  imgList.push(img);
}

gallery.insertAdjacentHTML("afterbegin", imgList.join(""));
