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

// console.log(ingredients);

const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);

for (let i = 0; i < ingredients.length; i += 1) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredients[i];
  listIngredients.append(newIngredient);
}
