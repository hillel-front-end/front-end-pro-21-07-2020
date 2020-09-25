console.log('Lection 19 - Descriptors. Async in JS');

/**
 * 
 */

// ! get/set
// const obj = {
//   get name() {
//     return 'John';
//   },
//   set name(value) {
//     this.name = value;
//   },
// }

// obj.name = 'Jane';
// console.log(obj);
// console.log(obj.name);
// console.log(obj._name);

/**
 * ! Object descriptors
 */

// ! атрибуты свойств (writable, configurable, enumerable) . Дескрипторы свойств
// const person = {
//   name: 'John',
//   // _age: 25,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     this._age = value;
//   },
// };
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// person.name = 'Jane';
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));

// * Object.defineProperty
// const person = {};
// Object.defineProperty(person, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   // get: function() {
//   //   return 'male';
//   // },
//   // set: function(value) {
//   //   return value;
//   // }
// });
// // console.log(person);
// Object.defineProperty(person, 'gender', {
//   value: 'male',
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// person.gender = 'female';
// console.log(person);

// person.name = 'John';

// for (let key in person) {
//   console.log(key);
// }

// console.log(JSON.stringify(person));
// console.log(Object.keys(person));

// Object.defineProperty(person, 'gender', {
//   value: 'female',
// });

// console.log(person);

// Object.defineProperty(person, 'age', {
//   get: function() {
//     return 25;
//   },
//   set: function(value) {
//     this._age = value;
//   },
//   enumerable: true,
//   configurable: true,
//   // writable: true,
//   // value: 27,
// });

// person.age = 26;

// console.log(person);
// console.log(person.age);





// for...in
// Object.keys
// * Object.defineProperties

// const person = {};
// Object.defineProperties(person, {
//   gender: {
//     value: 'male',
//     writable: false,
//   },
//   name: {
//     get: function() {
//       return this._age;
//     },
//     set: function(value) {
//       this._age = value;
//     },
//   },
// });

// person.age = 27;
// console.log(person);

// * Object.preventExtensions(obj)

// const person = {
//   name: 'John',
//   _age: 25,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     this._age = value;
//   },
// };

// Object.preventExtensions(person);
// person.someFun = 200;
// console.log(person);
// console.log(Object.isExtensible(person));

// * Object.freeze(obj)

// const person = {
//   name: 'John',
//   _age: 25,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     this._age = value;
//   },
// };

// person.surname = 'White';
// Object.freeze(person); // configurable: false, writable: false
// // console.log(Object.isFrozen(person));
// Object.defineProperty(person, 'surname', {
//   value: 'Black'
// });
// console.log(person);

// ! Object.create + descriptors - 19:51
// const prototype = {
//   showAge: function () {
//     console.log(this.age);
//   }
// };
// const person = Object.create(prototype, {
//   name: {
//     value: 'JOhn',
//     writable: false,
//     enumerable: false,
//   },
//   age: {
//     value: 25,
//     // enumerable: true,
//   },
// });

// console.log(person);
// console.log(JSON.stringify(person));
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// person.showAge();


// function main() {
//   multiply(2, 3);
// }

// function multiply(a, b) {
//   return a * b;
// }

// main();

// !!! Event Loop

// ! setTimeout

// function sayHi() {
//   console.log('Hello');
// }

// setTimeout(sayHi, 2000);

// function sayHi(value, str) {
//   console.log('Hello');
//   console.log(value);
//   console.log(str);
// }

// setTimeout(sayHi, 2000, 100, 'second');

// function sayHi() {
//   console.log('Hello');
// }

// const timer = setTimeout(sayHi, 5000);
// document.querySelector('button').addEventListener('click', () => {
//   clearTimeout(timer);
// });

// ! setInterval

// function sayHi() {
//   console.log('Hello');
// }

// setInterval(sayHi, 1000);


// const timer = setInterval(function() {
//   console.log('interval');
// }, 5000);

// setTimeout(function () {
//   clearInterval(timer);
// }, 1000);

// ! Async

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);

// * Heap, Stack

// debugger;
// function baz() {
//   console.log('Hello from baz');
// }

// function bar() {
//   baz();
// }
// function foo() {
//   bar();
// }
// foo();
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYmF6KCkgewogIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGJheicpOwp9CgpmdW5jdGlvbiBiYXIoKSB7CiAgYmF6KCk7Cn0KZnVuY3Rpb24gZm9vKCkgewogIGJhcigpOwp9CmZvbygpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coMSk7CnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogIGNvbnNvbGUubG9nKDIpOwp9LCAwKTsKY29uc29sZS5sb2coMyk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// ***********

// function f1() {
//   setTimeout(function() {
//     console.log(99);
//   }, 1000);
//   setTimeout(function() {
//     console.log(100);
//   }, 1000);
// }

// function f2() {
//   for(let i = 0; i < 20; i++) {
//     console.log(i);
//   }
// }

// f2();
// f1();

// *********

// document.querySelector('button').addEventListener('click', () => {
//   console.log('clicked');
// });

// setTimeout(() => {
//   console.log('timeout');
// }, 2000);

// for(let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// ********

// for (var i = 1; i < 4; i++) {
//   // setTimeout(function(i) {
//   //   console.log(i);
//   // }, 0, i);
//   function log(i) {
//     console.log(i);
//     console.log(arguments);
//   }
//   setTimeout(log.bind(null, i, 'second', 'third'));
// }

// for (var i = 1; i < 4; i++) {
//   (function () {
//     var a = i;
//     setTimeout(function () {
//       console.log(a);
//     });
//   })();
// }


// ! Homework

/**
 * 1. Реализовать электронные часы
 * 2. Реализовать слайдер
 *    * Меняющий каждые 3 секунды изображение (массив из 5 изображений)
 *    * Реализовать переключение по стрелкам. 
 *    * Слайдер должна работать циклически: по достижении последнего изображения и при клике на кнопку Next - показывать первое изображение
 */
