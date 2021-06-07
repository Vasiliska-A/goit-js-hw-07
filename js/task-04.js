// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const buttonAdd = document.querySelector('button[data-action="increment"]');
const buttonRemove = document.querySelector('button[data-action="decrement"]');
let counterValue = document.querySelector("#value");
let counter = 0;

const addNumberOnCLick = () => {
  counter += 1;
  counterValue.innerHTML = counter;
  console.log(counterValue);
};

const removeNumberOnCLick = () => {
  counter -= 1;
  counterValue.innerHTML = counter;
  console.log(counterValue);
};

buttonAdd.addEventListener("click", addNumberOnCLick);

buttonRemove.addEventListener("click", removeNumberOnCLick);
