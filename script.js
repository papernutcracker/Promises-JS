//1
function processArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}
function doubleElement(element) {
  return element * 2;
}
function reverseElement(element) {
  return String(element).split('').reverse().join('');
}
console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));

//2
function filterArray(array, callback) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
function isEven(number) {
  return number % 2 === 0;
}
function isShortWord(word) {
  return word.length <= 4;
}
console.log(filterArray([1, 2, 3, 4, 5], isEven));
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord));

//3
function washDishes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Посуд вимито"), 2000);
  });
}
function cleanRoom() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Кімнату прибрано"), 4000);
  });
}
function makeDinner() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Вечеря приготована"), 7000);
  });
}
washDishes()
  .then((message) => {
    console.log(message);
    return cleanRoom();
  })
  .then((message) => {
    console.log(message);
    return makeDinner();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Щось пішло не так:", error);
  });

//4
function sortArray(array) {
  return new Promise((resolve, reject) => {
    if (array.length === 0) {
      reject("Масив порожній");
    } else {
      setTimeout(() => {
        const sortedArray = [...array].sort((a, b) => a - b);
        resolve(sortedArray);
      }, 2000);
    }
  });
}
sortArray([10, 2, 5, 1, 9])
  .then((result) => console.log("Відсортовано:", result))
  .catch((error) => console.error("Помилка:", error));
sortArray([])
  .then((result) => console.log("Відсортовано:", result))
  .catch((error) => console.error("Помилка:", error));
