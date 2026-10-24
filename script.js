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


// class Marker {
//   constructor(color, inkLevel) {
//     this.color = color;
//     this.inkLevel = Math.max(0, Math.min(100, inkLevel)); // Від 0 до 100%
//   }

//   print(text) {
//     let printedText = "";
//     for (let char of text) {
//       if (this.inkLevel <= 0) break; // Якщо чорнило закінчилось, припиняємо друк
      
//       printedText += char;
//       // Віднімаємо 0.5% за кожен символ, що не є пробілом
//       if (char !== " " && char !== "\n" && char !== "\t") {
//         this.inkLevel -= 0.5;
//       }
//     }
    
//     // Вивід у консоль із заданим кольором
//     console.log(`%c${printedText}`, `color: ${this.color}; font-weight: bold;`);
//     console.log(`Залишок чорнила: ${this.inkLevel}%`);
//   }
// }

// class RefillableMarker extends Marker {
//   refill(amount = 100) {
//     this.inkLevel = Math.min(100, this.inkLevel + amount);
//     console.log(`Маркер заправлено. Поточний рівень: ${this.inkLevel}%`);
//   }
// }

// // Демонстрація роботи
// console.log("--- ЗАВДАННЯ 1 ---");
// const myMarker = new RefillableMarker("blue", 5);
// myMarker.print("Hello World! Це довгий текст для перевірки."); // Роздрукує лише частину, бо мало чорнила
// myMarker.refill();
// myMarker.print("Тепер чорнила вистачить на все речення!"); 