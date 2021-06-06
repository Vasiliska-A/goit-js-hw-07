// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categories = document.querySelectorAll("#categories .item");
console.log(`В списке ${categories.length} категории.`);

for (let i = 0; i < categories.length; i += 1) {
  const title = categories[i].firstElementChild.textContent;
  const quantity = categories[i].lastElementChild.children;
  console.log(`Категория: ${title}. Количество элементов: ${quantity.length}`);
}

// const element = document.querySelector("#categories li.item h2");
// const quantityOfElements = document.querySelector("#categories li.item ul ");
// console.log(
//   `Категория: ${element.textContent}. Количество элементов: ${quantityOfElements.children.length}`
// );

// const listNames = document.querySelectorAll("#categories li.item h2");
// for (let i = 0; i < listNames.length; i += 1) {
//   const listName = listNames[i];
//   console.log(`Категория: ${listName.textContent}`);

//   const quantityOfElements = document.querySelectorAll(
//     "#categories li.item ul "
//   );
//   for (let i = 0; i < quantityOfElements.length; i += 1) {
//     const quantity = quantityOfElements[i];
//     console.log(` Количество элементов: ${quantity.children.length}`);
//   }
// }

// const titleAndQuantity =
