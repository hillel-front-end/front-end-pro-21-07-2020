console.log('Lection 17');

/**
 * 
 */

/**
 * ! let, const - 19:23
 */
// const a = 1;
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// function test() {
//   console.log(someVar);
//   let someVar = 1;
// }
// test();
// const obj = {};
// obj.some = 1;

/**
 * ! Arrow function - 19:26
 * 
 * * Отсутствует собственный контекст
 * * Не могут использоваться как функции-конструкторы
 * * Отсутствует arguments
 */
// const User = () => {};
// const john = new User();

// const add = (x, y) => x + y;
// const add = (x, y) => {
//   return x + y;
// }
// const square = (x) => x * x;
// const square = x => x * x;
// const stableVal = () => 42;
// const log = () => console.log('hello world');
// console.log(log());
// const multiply = (x, y) => {
//   let result = x * y;
//   return result;
// }
// const getPerson = () => {
//   return {
//     user: 'Bill',
//   };
// };
// const getPerson = () => ({
//   name: 'John',
// });
// (function() {})();
// (() => {})();

/**
 * ! Шаблонные строки - 19:35
 */

// const digit = 5;
// const arr = [1, 2];
// const obj = {
//   name: 'John',
// }
// const str = `This is my digit value: ${digit}. | ${arr} | ${obj}`;
// console.log(str);

/**
 * ! Значение параметров по умолчанию - 19:40
 */

// const myFunc = function(value = 5) {
//   console.log(value);
// }

// myFunc();

// const myFuncArrow = (value = 5) => console.log(value);

// myFunc();
// myFuncArrow(undefined, 200);

/**
 * ! Spread operator
 */

// function foo(x, y, z) {
//   console.log(x, y, z);
// }
// const arr = [1, 2, 3, 4];

// foo(...arr);

/**
 * * Найти максимальное число
 */
// const arr = [1, 2, 3];
// console.log(Math.max(1, 2, 3));
// console.log(Math.max.apply(Math, arr));

// console.log(Math.max(...arr));

/**
 * * Копирование массива
 */

//  const arr = [1, 2, 3];
// const arr2 = [
//   ...arr,
// ];
//  console.log(arr2, arr === arr2);
//  const anotherArr = [...arr, 4, 5, ...arr, 6];
//  console.log(anotherArr);
//  const str = 'abc';
//  console.log([
//  ...str,
//  'd',
// ]);

/**
 * * Object spread
 */
// const obj1 = {
//   name: 'John',
// }
// const obj2 = {
//   age: 22,
//   // name: 'Jane',
//   skills: ['js', 'python'],
// }
// const clone = {
//   ...obj1,
// }
// console.log(clone, obj1 === clone);
// const mergeObj = {
//   ...obj1,
//   ...obj2,
// };
// console.log(mergeObj);

// const mergeObj = {
//   ...obj1,
//   ...obj2,
// };
// console.log(mergeObj);

// obj2.skills.push('ruby');
// console.log(mergeObj);
// console.log(mergeObj.skills === obj2.skills);

/**
 * ! Rest operator - 20:05
 */
// function foo(first, second,  ...args) {
//   console.log(args);
//   console.log(first);
// }

// foo(1, 2, 3, 4, 5);

// function foo(first, ...rest) {
//   console.log(rest);
// }

// foo(1, 2, 3, 4);

/**
 * ! Деструктивное присваивание. Destructuring - 20:07
 */
// const [js, php, py, rb] = ['javascript', 'php', 'python', 'ruby'];
// console.log([js, php, py, rb]);
// console.log(php);
// console.log(py);
// console.log(rb);

// const user = {
//   name: 'Bill',
//   age: 30,
//   skills: ['javascript', 'php', 'python', 'ruby'],
// };

// // let { name, age, skills } = user;

// // console.log(name);
// // console.log(age);
// // console.log(skills);

// function showUserData({ name, age, skills }, { a }) {
// // function showUserData(user) {
//   console.log(name);
//   console.log(age);
//   console.log(skills);
//   console.log(a);
// }

// showUserData(user, { a: 2 });

/**
 * ! entries, keys, values - 20:25
 */
const arr = ['a', 'b', 'c'];
// console.log(arr.entries());
// // for (let i of arr.entries()) {
//   // console.log(i);
//   // const [index, value] = i;
// for (let [index, value] of arr.entries()) {
//   // console.log(i);
//   console.log(index);
//   console.log(value);
// }
// console.log(arr.keys());
// for (let key of arr.keys()) {
//   console.log(key);
// }
// for (let value of arr.values()) {
//   console.log(value);
// }

// console.log(arr.values());

// const person = {
//   name: 'Bill',
//   age: 30,
//   skills: ['javascript', 'php', 'python', 'ruby'],
// }
// console.log(Object.entries(person));
// for (let [key, value] of Object.entries(person)) {
//   console.log(key, value);
// }
// console.log(Object.keys(person));
// for (let key of Object.keys(person)) {
//   console.log(key);
// }
// console.log(Object.values(person));
// for (let value of Object.values(person)) {
//   console.log(value);
// }
/**
 * ! Array.from
 */
// console.log(document.querySelectorAll('*'));
// const arr1 = Array.from(document.querySelectorAll('*'));
// console.log(arr1);

/**
 * ! Object descriptors
 */

// ! get/set

// const person = {
//   name: 'John',
//   get age() {
//     return 25;
//   },
//   set age(value) {
//     this._age = value;
//   }
// };
// console.log(person.age);
// person.age = 26;
// console.log(person);

// ! атрибуты свойств (writable, configurable, enumerable) . Дескрипторы свойств
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
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));

// * Object.defineProperty
// const person = {};
// Object.defineProperty(person, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   get: function() {
//     return 'male';
//   },
//   set: function(value) {
//     return value;
//   }
// });
// console.log(person);
// Object.defineProperty(person, 'gender', {
//   value: 'male',
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// for (let key in person) {
//   console.log(key);
// }

// Object.defineProperty(person, 'gender', {
//   value: 'female',
// });


// for...in
// Object.keys
// * Object.defineProperties

// Object.defineProperties(person, {
//   gender: {
//     value: 'male',
//     writable: false,
//   }
// });

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
// console.log(Object.isFrozen(person));
// Object.defineProperty(person, 'surname', {
//   value: 'White'
// });
// console.log(person);

// ! Object.create + descriptors
// const prototype = {
//   showAge: function () {
//     console.log(this.age);
//   }
// };
// const person = Object.create(prototype, {
//   name: {
//     value: 'JOhn',
//   },
//   age: {
//     value: 25
//   },
// });

// console.log(person);
// person.showAge();

/**
 * ! Practice
 */
/**
 * Используя классы и шаблонные строки произвести вывод на экран товаров:
 * Товары вывести в виде карточек, верстка элементарная, на свое усмотрение
 * Используем фичи ES6, все методы по рендерингу должны хранится в классе ViewController
 */

/**
 * ! Homework
 * Создать скрипт, который:
 * Выводит список пользователей с кнопками “Edit”, “Remove”, “View” возле каждого пользователя (use data-id attributes)
 * При клике на кнопку “View” открываются данные пользователя в блоке под списком
 * При клике на кнопку “Edit” появляется возможность редактировать его данные в блоке под списком. Данные сохраняются при клике на кнопку “Save” и обновляют данные в списке
 * При клике на кнопку “Remove” пользователь удаляется из списка
 * Обязательно подтверждение удаления
 * Реализовать возможность добавления новых пользователей
 * Желательно переиспользовать форму редактирования
 * При добавлении пользователь появляется в списке
 * • Все данные должны записываться в localStorage и быть доступными на странице после перезагрузки
 *  • Все изменения с списком должны сохраняться после обновления страницы
 */
