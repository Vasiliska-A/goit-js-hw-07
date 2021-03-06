// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputValue = document.querySelector("#name-input");
console.log(inputValue);
const changeWord = document.querySelector("#name-output");
console.log(changeWord);

inputValue.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  changeWord.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    changeWord.textContent = "незнакомец";
  }
});
