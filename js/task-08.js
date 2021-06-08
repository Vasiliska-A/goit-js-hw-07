// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputItem = document.querySelector("input");
const createBtn = document.querySelector('button[data-action="render"]');
const removeBtn = document.querySelector('button[data-action="destroy"]');
const container = document.getElementById("boxes");

const getAmount = () => {
  const amount = +inputItem.value;
  createBoxes(amount);
};
const createBoxes = (amount) => {
  const initialDiv = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = initialDiv + i * 10;
    const divItem = document.createElement("div");
    divItem.style.cssText = `width:${size}px; height:${size}px; background-color:rgba (${random()},${random()},${random()} )`;
    fragment.appendChild(divItem);
  }
  container.appendChild(fragment);
};

const deleteBoxes = () => {
  container.innerHTML = "";
};

const random = () => {
  Math.floor(Math.random() * 256);
};

createBtn.addEventListener("click", getAmount);
removeBtn.addEventListener("click", deleteBoxes);
