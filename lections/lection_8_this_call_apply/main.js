console.log('Lection 8 ');

/**
 * Тайм коды:
 * 00:01 - Object method
 * 00:11 - this
 * 00:26 - Bind
 * 01:02 - Call, apply
 * - Arrow function
 * 01:20 - __proto__, prototype
 */

// ! Object method - 19:29

// const user = {
//   name: 'John',
//   age: 25,
//   greet: function() {
//     console.log('John');
//   },
//   getAge: function() {
//     return 25;
//   }
// };

// user.greet();
// console.log(user.getAge());

// function greetFunc() {
//   console.log('John');
// }

// const user = {
//   name: 'John',
//   age: 25,
//   // greet: greetFunc,
//   getAge: function() {
//     return 25;
//   }
// };
// // ---- 
// user.greet = greetFunc;
// user.greet();

// const anotherUser = {
//   name: 'James',
//   age: 27,
//   // greet: greetFunc,
//   greet: function() {
//     console.log('James');
//   }
// }

// anotherUser.greet();


// const user = {
//   name: 'John',
//   age: 25,
//   greet: function () {
//     console.log(`Name is John`);
//   }
// }


// ! Object this - 19:39

// const user = {
//   name: 'Jane',
//   age: 25,
//   greet: function() {
//     console.log(this.name);
//     // console.log(age);
//   },
// };

// user.greet();

// const anotherUser = {
//   name: 'James',
//   greet: function() {
//     console.log(this);
//   }
// };

// anotherUser.greet();


// function greetFunc() {
//   // console.log(this.name);
//   console.log(this);
// }

// const user = {
//   name: 'John',
//   greet: greetFunc,
// };

// const anotherUser = {
//   name: 'James',
//   greet: greetFunc,
// };

// user.greet();
// anotherUser.greet();

// greetFunc();

// function setName(userName) {
//   this.name = userName;
// }

// user.setName = setName;

// console.log(user);
// user.setName('Jane');
// console.log(user);

// console.log(this);

// const user = {
//   name: 'John',
//   age: 25,
//   greet: function () {
//     console.log(this);
//     console.log(`Name is ${this.name}`);
//   }
// }
// const anotherUser = {
//   name: 'James',
//   age: 27,
//   greet: function() {
//     console.log(`James`);
//   }
// }
// user.greet();

// function greet() {
//   console.log(this);
// }

// greet();

// ! Bind - 19:54

// const animal = {
//   name: 'dog',
//   showName: function (message) {
//     console.log(message + ': ' + this.name);
//     console.log(arguments);
//   },
// };

// const cat = {
//   name: 'cat',
// };

// // cat.showName = animal.showName;
// cat.showName = animal.showName.bind(animal, 'welcome', 1, 2, 3);

// cat.showName(45);

// cxonst user = {
//   id: 1,
//   name: 'Jane',
//   cart: [
//     {
//       id: 1,
//       name: 'coat',
//       available: true,
//     },
//     {
//       id: 2,
//       name: 'hat',
//       available: false,
//     },
//   ],
//   prepareOrder: function () {
//     function makeOrder() {

//     }
//   }
// }


// function greet() {
//   console.log(this, arguments);
// }

// greet();
// ! Call, apply - 20:30
// function greet() {
//   console.log(this, arguments);
// }
// const user = {
//   name: 'John',
//   age: 25,
//   greet: function(message) {
//     console.log(message + ': ' + this.name);
//     console.log(arguments);
//   },
// };

// user.greet();

// const anotherUser = {
//   name: 'Jane',
// };
// anotherUser.greet = user.greet.bind(user);
// anotherUser.greet();
// user.greet.call(anotherUser, 'welcome', 1, 2);
// user.greet.apply(anotherUser, ['welcome', 2, 4]);

// anotherUser.greet = user.greet.bind(user);
// anotherUser.greet = user.greet.bind(user, 'welcome: ');
// anotherUser.greet();
// anotherUser.greet.call(user, 1, 2);
// anotherUser.greet.apply(user, [1, 2]);

// const arr = [1, 2, 3, 5, 22];
// console.log(Math.max.apply(Math, arr));
// console.log(Math.max(2, 4, 22));
// console.log(Math.max.apply(Math, arr));
// Math.max(1, 2, 3, 5, 22);

// ! Arrow function

// const user = {
//   name: 'John',
//   age: 25,
//   cart: [
//     {
//       id: 1,
//       name: 'coat',
//       available: true,
//     },
//     {
//       id: 2,
//       name: 'hat',
//       available: false,
//     }
//   ],
//   preparePurchase: function () {
//     const order = {
//       // makeOrder: () => {
//       //   console.log(this.cart.filter(function (good) {
//       //     return good.available;
//       //   }));
//       // }
//     };
//     // const viewOrderFunc = () => {
//     //   console.log(this.cart);
//     // }
//     // function viewOrderFunc() {
//     //   console.log(this.cart);
//     // };

//     const viewOrderFunc = () => {
//       console.log(this.cart);
//     }

//     // order.viewOrder = viewOrderFunc.bind(this);
//     order.viewOrder = viewOrderFunc;

//     return order;
//   },
// }

// // user.preparePurchase().viewOrder();

// const order = user.preparePurchase();
// // console.log(order);

// const anotherUser = {
//   cart: [{
//     id: 3,
//     name: 'boots'
//   }],
//   someMethod: order.viewOrder,
// }

// anotherUser.someMethod();

// ! __proto__, prototype - 20:48

// const user = {
//   name: 'John',
//   greet: function () {
//     console.log(this.name);
//   }
// };
// user.greet();
// user.sayHello();
// console.log(user.toString());
// console.log(user);

// console.log(user.__proto__);

// Object.prototype.sayHello = function () {
//   console.log('Hello!');
// };

// const user = new Object({
//   name: 'John',
// });
// // console.log(Object.prototype);
// // user.__proto__ = Object.prototype;
// console.log(user);
// const arr = [1, 2, 3];
// const arr = new Array([]);
// Array.prototype
// console.log(arr.toString());
// console.log(arr.valueOf());
// console.log(arr);
// Array.prototype.mySum = function() {
//   let sum = 0;
//   for(let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   return sum;
// }
// console.log(arr.mySum());
// const anotherArr = [5, 6, 7];
// console.log(anotherArr);
// console.log(anotherArr.mySum());
// ! Практика:
/**
 * 1. Создать объект с такой структурой:
      obj = {
          x: 10,
          y: 20,
          inner: {
              x: 20,
              z: 30
          },
          foo2: {
              k: 23,
              p: 13
          }
      }
      Написать функцию convert(obj), который будет хранится в window,
      он получает аргументом obj. Функция должна вернуть объект:

      newObj = {
          x: 20,
          y: 20,
          z: 30,
          k: 23,
          p: 13
      }

    2. Написать методы push, join, reverse самостоятельно.
       Их функциональность должна соответствовать стандартным методам массивов.

      list.myPush(); list.myJoin(); list.myReverse();

    3. Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый,
       который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта

       assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
       assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }

*/

// ! Homework
/**
 * 1. Создать 2 объекта с различными полями.
 *    Написать код, который переберёт оба объекта и
 *    сконкатениурет все поля-массивы.
 *    Посчитать сумму чисельных элементов в массивах.
 * 2. Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']),
 *    которая определяет, есть в массиве элемент с заданным текстом или нет.
 *    Функция первым параметром должна принимать текст элемента,
 *    а вторым - массив, в котором делается поиск.
 *    Функция должна возвращать true или false.
 * 3. В задачу п.3 (из лекции) добавить 3ий аргумента flag,
 *    который является boolean. Если флаг true, тогда при наличии свойства в
 *    обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
 *    * assignObjects({...}, {...}, false);
 * 4. В задачу п.3, сделать параметр flag не обязательный,
 *    если параметр не передать - устанавливать значение false.
 */
