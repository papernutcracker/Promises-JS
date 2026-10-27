// Змінена функція: приймає ID блоку і додає текст саме туди
const printTo = (id, text) => {
  document.getElementById(id).innerHTML += text + '<br><br>';
};

// 1
function processArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) result.push(callback(array[i]));
  return result;
}
printTo('out1', 'Подвоєні числа: ' + processArray([1, 2, 3, 4, 5], el => el * 2));
printTo('out1', 'Реверс рядків: ' + processArray(["hello", "world"], el => el.split('').reverse().join('')));

// 2
function filterArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) result.push(array[i]);
  }
  return result;
}
printTo('out2', 'Парні числа: ' + filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));
printTo('out2', 'Короткі слова: ' + filterArray(["cat", "elephant", "dog", "bird"], word => word.length <= 4));

// 3
const washDishes = () => new Promise(res => setTimeout(() => res("Посуд вимито (через 2с)"), 2000));
const cleanRoom = () => new Promise(res => setTimeout(() => res("Кімнату прибрано (через 4с)"), 4000));
const makeDinner = () => new Promise(res => setTimeout(() => res("Вечеря приготована (через 7с)"), 7000));

washDishes()
  .then(msg => { printTo('out3', msg); return cleanRoom(); })
  .then(msg => { printTo('out3', msg); return makeDinner(); })
  .then(msg => { printTo('out3', msg); });

// 4
function sortArray(array) {
  return new Promise((resolve, reject) => {
    if (array.length === 0) reject("Масив порожній (миттєва помилка)");
    else setTimeout(() => resolve("Відсортовано через 2с: " + [...array].sort((a, b) => a - b)), 2000);
  });
}
sortArray([10, 2, 5, 1, 9])
  .then(res => printTo('out4', res))
  .catch(err => printTo('out4', err));

sortArray([]) 
  .then(res => printTo('out4', res))
  .catch(err => printTo('out4', err));

function multiplyAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject("Некоректні значення (Множення)");
      return;
    }
    setTimeout(() => resolve(a * b), 2000);
  });
}

function sortArrayAsync(array) {
  return new Promise((resolve, reject) => {
    if (array.length === 0) {
      reject("Масив порожній (Сортування)");
      return;
    }
    setTimeout(() => resolve([...array].sort((a, b) => a - b)), 2000);
  });
}

async function runTask5And6() {
  // 5
  try {
    const result1 = await multiplyAsync(6, 9);
    printTo('out56', 'Завдання 5 (успіх): 6 * 9 = ' + result1);
  } catch (error) { printTo('out56', 'Помилка 5: ' + error); }

  try {
    const result2 = await multiplyAsync(6, "9");
    printTo('out56', 'Завдання 5: ' + result2);
  } catch (error) { printTo('out56', 'Завдання 5 (помилка): ' + error); }

  // 6
  try {
    const sorted = await sortArrayAsync([42, 7, 19, 1, 100]);
    printTo('out56', 'Завдання 6 (успіх): Відсортовано [' + sorted + ']');
  } catch (error) { printTo('out56', 'Помилка 6: ' + error); }

  try {
    const emptyResult = await sortArrayAsync([]);
    printTo('out56', 'Завдання 6: ' + emptyResult);
  } catch (error) { printTo('out56', 'Завдання 6 (помилка): ' + error); }
}

runTask5And6();
