// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в
// список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = document.querySelector("#ingredients");

const newIngredients = ingredients.map((ingredient) => {
  const newEL = document.createElement("li");
  newEL.textContent = ingredient;
  return newEL;
});

listIngredients.append(...newIngredients);
