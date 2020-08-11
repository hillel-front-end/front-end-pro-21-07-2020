console.log('Lection 7');

// ! Scopes. LexicalEnvironment

// var someVar = 'global';
// console.log(window.someVar);

// function firstLevelOne() {
//   /*
//     firstLevelOne.LexicalEnvironment = {
//       local: 'first_level_one',
//       anotherLocal: 'sss',
//     }
//     firstLevelOne.scope = [[Global]];
//   */
//   debugger;
//   var local = 'first_level_one';
//   var anotherLocal = 'sss';
//   console.log(someVar);
//   console.log(local);
// }
// firstLevelOne();

// function firstLevelTwo() {
//   debugger;
//   var firstLevelLocal = 'some';
//   /*
//     firstLevelTwo.LexicalEnvironment = {
//       firstLevelLocal: 'some',
//       secondLevelTwo: func,
//     }
//     firstLevelTwo.scope = [[Global]];
//   */
//   function secondLevelTwo() {
//       /*
//       secondLevelTwo.LexicalEnvironment = {
//         secondLevelLocal: 'second',
//       }
//     firstLevelTwo.scope = [[firstLevelTwo.LexicalEnvironment]];
//   */
//     debugger;
//     var secondLevelLocal = 'second';
//     console.log(firstLevelLocal);
//     console.log(someVar);
//   }

//   secondLevelTwo();
// }

// firstLevelTwo();
// var someVar = 'global';
// function f1() {
//   var someVar = 'f1';
//   console.log(someVar);
//   f2();
// }

// function f2() {
//   console.log(someVar);
// }

// f1();

// !!
// console.log(local);
// function firstLevelOne() {
//   /*
//     firstLevelOne.LexicalEnvironment = {
//       localVar: 'local_var', 
//     }
//     firstLevelOne.scope = [[Global]]
//   */
//   var localVar = 'first_level_one';
//   console.log(someVar, localVar);
//   debugger;
// }

// firstLevelOne();

// function firstLevelTwo() {
//   var localVar = 'first_level_two';
//   /*
//     secondLevelOne.LexicalEnvironment = {
//       localVar: 'local_var', 
//     }
//     secondLevelOne.scope = [[Global]]
//   */
//   function secondLevel() {
//     var localVar= 'second_level_two';
//     /*
//       secondLevelTwo.LexicalEnvironment = {
//         localVar: 'second_level_two', 
//       }
//       secondLevelTwo.scope = [[secondLevelOne.LexicalEnvironment]]
//     */

//   }
//   secondLevel();
// }

// firstLevelTwo();

// var globalVar = 'global';

// function f1() {
//   var globalVar = 'local';
//   f2();
// }

// f1();

// function f2() {
//   console.log(globalVar);
// }


// ! Область видимости let, const

// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// varTest();
// function letTest() {
//   let x = 1;
//   const y = 3;
//   if (true) {
//     let x = 2;
//     const y = 4;
//     console.log('x: ', x);
//     console.log('y: ', y);
//   }
//   console.log('x: ', x);
//   console.log('y: ', y);
//   for (var i = 0; i < 5; i++) {}
//   // for (var i = 0; i < 5; i++) {}
//   console.log(i);
// }
// letTest();

// var someVar = 'global';
// let someLet = 'let global';

// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// varTest();

// function letTest() {
//   let x = 1;
//   if (true) {
//     let x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// letTest();

// ! Анонимные самовызывающиеся функции - 19:51

// const someFunc = function() {};
// (function() {
//   let localVar = 'local';
//   console.log(localVar);
// })();

// const userModule = (function() {
//   let localVar = 'local';
//   const user = {
//     id: 1,
//     name: 'John',
//   };
//   return user;
// })();

// console.log(userModule);


// (function() {
//   alert('anonymous function');
// })();

// ! Callback. High Order Functions - 19:58

// function calculator(a, b) {
//   return a + b;
// }
// function calculator(a, b) {
//   return a * b;
// }
// console.log(calculator(1, 2));
// function sum(a, b) {
//   debugger;
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// function calculator(a, b, operator) {
//   debugger;
//   return operator(a, b);
// }

// function divide(a, b) {
//   return a / b;
// }

// console.log(calculator(1, 2, sum));
// console.log(calculator(1, 2, multiply));
// console.log(calculator(6, 2, divide));

// function calculator(a, b) {
//   return a + b;
// }

// function calculator(a, b) {
//   return a * b;
// }

// function sum(a, b) {
//   return a + b;
// }
// function multply(a, b) {
//   return a * b;
// }

// function calculator(a, b, operator) {
//   return operator(a, b);
// }

// debugger;
// calculator(1, 3, sum);
// calculator(2, 3, multply);

// function divide(a, b) {
//   return a / b;
// }


// ! Замыкания - 20:16

// function factory() {
//   let count = 0;
//   return function () {
//     return count++;
//   }
// }

// const counter = factory();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const counter2 = factory();
// console.log(counter2());
// console.log(counter());

// function factory() {
//   let count = 0;
//   return function (reset) {
//     if (reset !== undefined) {
//       count = reset;
//       // return count;
//     }
//     return count++;
//   }
// }

// const counter = factory();
// console.log(counter());
// console.log(counter());
// console.log(counter(50));
// console.log(counter());
// console.log(counter());
// console.log(counter(20));
// console.log(counter());



// console.log(counter());
// console.log(factory()());

// function factory() {
//   let count = 0;
//   return function () {
//     return count++;
//   }
// }

// const counter = factory();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// ! Рекурсия - 20:42

// Рекурсия – вызов функцией самой себя.

// * Возведение числа в степень
// (2 * 2) * 2
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(pow(2, 3));

// function pow(x, n) {
//   debugger;
//   if (x === 1) {
//     return 1;
//   }
//   if (n === 1) {
//     return x;
//   }
//   return x * pow(x, n - 1);
// }

// console.log(pow(2, 3));

// 2 * 2 * 2
// (2 * 1) * 2

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(pow(2, 3));

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   }
//   return x * pow(x, n - 1);
// }


// * Реализовать функцию факториал n! = n * (n -1) * ... * 1;

// 3! = 1 * 2 * 3
// 3! = 3 * 2 * 1
// n! = n * (n - 1) * (n -2) ... 1;

function factorial(n) {
  debugger;
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(60));

// function factorial(n) {
//   return n !== 1 ? n * factorial(n -1) : 1;
// }
// function some() {
//   console.log(arguments);
// }
// some(1, 2);
/**
 * ! Практика
 * 1. Написать функцию итератор, при каждом последующем обращении
 *    будет возвращать next элемент. var step = factory([2, 8, 9, 2, 4]);
 *    step(); // 2
 *    step(); // 8
 *    step(); // 9
 * 2. Адаптировать итератор из 2 задания под такой функционал:
 *      step(callback);, где callback - функция с 1 аргументом.
 *    step(sqr); // 4
 *    step(sqr); // 64
 *    step(sqr); // 81
 *  3. Написать функцию getMaxs(args), где args - любое количество массивов.
 *    Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель ,
 */

 /**
  * ! Домашка
  *  1. Функция должна вернуть массив из центральных элементов переданных массивов.
  *      Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
  *      Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4
  *      calculate([1, 2, 3], [1, 2], [3, 4, 5], ...);
  *  2. Написать функцию, которая получает 3 аргумента: два числа и функцию.
  *     Произвести вызов переданной функции с двумя аргументами числами.
  *     doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.
  *  3. Из п.2 реализовать функции sum, div, mul, power
  *       doFunction(16, -23, mul); // 16*(-23)
  *  4. Из п.2, если количество числовых аргументов равно единице
  *     и переданная функция factorial - реализовать расчет факторикала.
  *     doFunction(6, factorial);,
  *     в ответе поулчаем 6! = 720. // arguments.length и typeof
  */

