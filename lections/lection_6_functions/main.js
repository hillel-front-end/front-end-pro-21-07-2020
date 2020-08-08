console.log('Lection 6');

/**
 * Тайм коды
 * 00:06 - isNaN
 * 00:16 - Functions
 * - Объявление и вызов функций
 * - Аргументы
 * - Формальные и фактические аргументы
 * - Аргументы по умолчанию
 * - return
 * 00:58 - arguments 20:07
 * 01:06 - Порядок вызова функции
 * 01:09 - Function expression
 * 01:16 - Мутация данных. Чистые функции
 * 01:23 - Локальные и внешние переменные. Глобальная и локальная область видимости
 * 01:50 - Передача и возврат функции. Callback - 20:05
 */

// ! isNaN() - 19:21
// const digit = NaN;
// console.log(digit === NaN);
// console.log(isNaN(digit));
// console.log(NaN === NaN);
// console.log(isNaN(NaN));

// let len;

// // input === '0'

// while(true) {
//   const input = prompt('Please, enter a digit', '');
//   if (input !== '' && !isNaN(+input) && input !== null) {
//     len = input;
//     break;
//   }
// }
// console.log(len);


// ! Functions - 19:31

// const arr = [1, 2, 3];
// let maxValue = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxValue) {
//     maxValue = arr[i];
//   }
// }

// const arr2 = [5, 6, 7];

// ! Объявление и вызов функций

/**
 * function идентификатор(аргумент, аргумент) {
 *  тело функции
 * };
 * идентификатор(аргумент);
*/
// function findMaxItem(a, b) {

// }

// findMaxItem(1, 2);

// ! Аргументы

// function sum(a, b) {
//   console.log(a + b);
//   console.log(a * b);
// }
// sum(1, 2);

// ! Формальные и фактические аргументы

// function sum(a, b, c) {
//   // let a = 1;
//   // let b = 2;
//   // console.log(a + b + c);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// sum(1, 2, 3);
// sum();

// ! Аргументы по умолчанию

// function sum(a, b = 'some string', c = {
//   a: 2,
// }) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   // const result = a + b;
//   // console.log(result);
// }
// sum(1, 'another string', [1,2,3]);

// ! return

// function sum(a, b) {
//   // console.log(a, b);
//   const res = a + b;
//   return res;
// }
// console.log(a);
// const digit1 = 1;
// const digit2 = 2;

// sum(digit1, sum(2, 5));

// sum(1, 2);
// sum(2, 4);
// console.log(sum(5, 6));
// const result = sum(10, 1);
// console.log(result);

// console.log(sum(1, 2));

// ! arguments 20:07

// function sum() {
//   // console.log(arguments);
//   // console.log(arguments[0], arguments[1], arguments[2]);
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// const res = sum(1, 2, 3, 4);
// console.log(res);

// console.log(sum(1, 2, 3));

// ! Порядок вызова функции - 20:21

// console.log(sum(1, 2));
// function sum(a, b) {
//   return a + b;
// }
// sum(1, 2);

// ! Function expression - 20:24

// const result = sum(1, 2);
// console.log(result);
// console.log(sum);

// var sum = function(a, b) {
//   return a + b;
// };

// const result = sum(1, 2);
// console.log(result);
// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(1, 2));


// ! Мутация данных. Чистые функции - 20:31
// Удалить максимальные элемент массива

// function delMaxElementDirty(arr) {
//   let maxValue = arr[0];
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//       maxIndex = i;
//     }
//   }
//   arr.splice(maxIndex, 1);
//   return arr;
// }

// function delMaxElementPure(arr) {
//   let maxValue = arr[0];
//   let maxIndex = 0;
//   let copy = arr.slice();
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//       maxIndex = i;
//     }
//   }
//   copy.splice(maxIndex, 1);
//   return copy;
// }

// const arr = [1, 5, 3];
// const result = delMaxElementPure(arr);
// console.log(result);
// console.log(arr);


// ! Локальные и внешние переменные. Глобальная и локальная область видимости - 20:38
// global
// var a = 1;
// function sum() {
//   console.log(b);
//   var b = 1;
//   console.log(b);
// }
// sum();
// console.log(b);

// var a = 1;
// //1 ------------------------------------------
// function sum() { //                          |
//   var a = 2; //                              |
//   console.log(a); //                         |
//   // 2 --------------------------------
//   function innerFunc() {
//     // var a = 3;
//     a = 4;
//     console.log(a);
//     // 3 ---------------------------------
//     function multi() {
//       a = 6;
//       console.log(a);
//     }
//     // -------------------------------------
//     multi();
//   }
//   // ----------------------------

//   innerFunc();

//   console.log(a);
// }
// // --------------------------------
// sum();
// console.log(a);

// global -- var a = 1
// sum -- var a = 2
// innerFunc - var a = 4
// multi a = 6

// var b = 2;

// console.log(a);
// console.log(window.a);

// function sum() {
//   const a = 2;
//   return a + b;
// }
// console.log(sum());

// ! Цепочка областей видимости

// const i = 1;
// function parent() {
//   const i = 2;
//   console.log(i);
//   function nested() {
//     const i = 3;
//     console.log(i);
//   }
//   nested();
// }
// parent();



// ! Передача и возврат функции. Callback - 20:05



// function print(message) {
//   // console.log(message);
//   alert(message);
//   console.log(message);
// }
// const tmp = print;

// function greeting(callback) {
//   callback('hello world'); // print();
//   // const msg = 'Hello world';
//   // callback(msg);
// }

// greeting(print);

// function sum() {
//   console.log('sum');
//   function multiply() {
//     console.log('multiply');
//   }
//   return multiply;
// }
// const res = sum();
// console.log(res);
// res();

// greeting(print);

// function greeting(callback) {
//   const message = 'Hello world!';
//   callback(message);
// }
// function callbackFunction(message) {
//   console.log(message);
// }

// greeting(callbackFunction);
// greeting(alert);
// greeting(console.log);
// greeting(document.write);

// function func() {
//   console.log('parrent called');
//   function nestedFunc() {
//     console.log('nested called');
//   }
// }
// const res = func();
// console.log(res);
// res();

// ! Практика
/**
 * * 1. Написать функцию вывода одномерного массива через
 * *    разделитель в документ. (без разделителя)
 * 
 * * 2. Написать функцию заполнения одномерного массива
 * *    с указанием длины. Запрос за длину массива
 * *    и диапазон произвести внутри функции
 */

