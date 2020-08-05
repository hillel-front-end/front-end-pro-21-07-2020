console.log('lection 5');

/**
 * Тайм коды:
 * - использование const (не обязательно большими буквами)
 * - Строки как массивы
 * 00:11 - Объект
 * 00:17 - Ключами объекта являются строки
 * 00:24 - Доступ к свойствам объекта
 * - Добавить/изменить ствойство
 * 00:34 - Удалить свойство
 * - Проверка существования свойства. in
 * - Цикл for in
 * 01:05- hasOwnProperty(), Object.getOwnPropertyNames()
 * 01:16 - Копирование по ссылке
 * 01:27 - Сравнение объектов
 * 01:47 - Клонирование объектов
 * - Object.values(), Object.keys(), Object.entries()
 * - Создание объекта
 */


// ! использование const (не обязательно большими буквами)
// const USER_STATUS = '';
// const givenArray = [1, 2, 3];
// const predefinedLength = givenArray.length;

// ! Строки как массивы
// const str = 'some string';
// console.log(str);
// console.log(str[0]);
// const subStr = str.slice(0, 3);
// console.log(subStr);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 5];
// console.log(arr.indexOf(5));
// const str = 'some string';
// console.log(str.indexOf('s'), str.indexOf('s'));

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 5];
// console.log(arr.includes(3));
// console.log(arr.includes(33));

// const str = 'some string';
// console.log(str.includes('some')); // true
// console.log(str.includes('sm')); // false

// ! Объект - 19:26
// const user = {
//   'id': 1,
//   'name': 'John',
//   'age': 32,
//   'valid': true,
//   'cart': {
//     'date': '2020-03-01',
//     'items': [
//       {
//         'id': 56,
//         'name': 'Car',
//         'price': 35,
//       },
//     ],
//   }, 
//   '0': 'some string',
//   anotherField: 'aaa',
//   'another field': 1,
// };
// console.log(user);

// ! Ключами объекта являются строки 19:32
// const user = {
//   id: 1,
  // name: 'John'
// };

// const key = 'name';
// const str = ' test';
// const name = 'John';
// const user = {
  // [key]: name,
// };
// const user = {
  // [key + str]: name,
// };
// console.log(user);

// const someArr = [1, 2, 3];
// console.log(typeof someArr.toString());
// console.log(someArr.toString());
// const obj = {
//   [someArr]: 26,
//   [true]: 12,
// };
// console.log(obj);

// ! Доступ к свойствам объекта - 19:39
// const user = {
//   'id': 1,
//   name: 'John',
//   'age': 32,
//   'cart': {
//     'date': '2020-03-01',
//     'items': [
//       {
//         'id': 56,
//         'name': 'Car',
//         'price': 35,
//       },
//     ],
//   }, 
//   '0': 'some string',
//   'some property': 25,
// };
// console.log(user.name);
// console.log(user.cart);
// console.log(user.cart.date);
// console.log(user.cart.items[0].price);
// console.log(user.some property); // Don't work
// console.log(user['some property']);
// const userCollection = [ // Collection
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'James',
//   },
// ];

// ! Добавить/изменить ствойство
// const user = {
//   age: 25,
// };
// user.name = 'John';
// user.valid = true;
// console.log(user);

// user['some property'] = 'test';
// console.log(user);

// user.cart = {
//   items: []
// };
// console.log(user);

// ! Удалить свойство - 19:49
// const user = {
//   age: 25,
//   name: 'John',
//   valid: true,
// };

// console.log(user);
// delete user.name;
// user.valid = undefined;
// console.log(user);

// ! Проверка существования свойства. in

// const user = {
//   age: 25,
//   // name: undefined,
// };

// console.log(user.name);

// if (user.name !== undefined) {
//   console.log('Exists');
// } else {
//   console.log('no exists');
// }

// user.name = 'John';

// console.log('name' in user);
// console.log('some value' in user);

// document.write(user.name);
// if ('name' in user) {
//   document.write(user.name);
// }

// console.log(user.name);
// console.log(user.name === undefined);
// console.log('name' in user);
// console.log('age' in user);
// const propertyName = 'age';
// console.log(propertyName in user);

// ! Цикл for in

// const user = {
//   age: 25,
//   name: 'John',
// };
// let counter = 0;
// for (let propertyName in user) {
//   console.log(counter, propertyName);
//   counter++;
// }

// for (let propertyName in user) {
//   console.log(typeof propertyName);
//   console.log(propertyName, user[propertyName]);
// }
// const propertyName = 'age'; // 1 iteration
// user.age
// user['age']
// user[propertyName]
// console.log(user[propertyName]);
// 2 iteration
// const propertyName = 'name';
// user.name
// user['name']
// user[propertyName]

// const arr = [1, 2, 3, 4];
// for (let i in arr) {
//   console.log(typeof i);
//   console.log(i, arr[i]);
// }

// * Массивы это объекты
// for (let i in arr) {
//   console.log(i);
//   console.log(arr[i]);
// }

// ! hasOwnProperty(), Object.getOwnPropertyNames() - 20:20

// const animal = {
//   eats: true,
// };

// const cat = {
//   voice: 'meow',
//   let: 'aa',
//   __proto__: animal,
// };
// console.log(cat);
// for (let propertyName in cat) {
//   // if (propertyName in cat) {
//   //   console.log(propertyName, cat[propertyName]);
//   // }
//   // console.log(propertyName, cat[propertyName]);
//   // if (cat.hasOwnProperty(propertyName)) {
//   //   console.log(propertyName, cat[propertyName]);
//   // }
//   console.log(propertyName, cat.hasOwnProperty(propertyName));
//   if (cat.hasOwnProperty(propertyName)) {
//     console.log(propertyName, cat[propertyName]);
//   }
// }
// for (let name in cat) {
//   console.log(name);
//   if (cat.hasOwnProperty(name)) {
//     console.log(name);
//   }
// }

// console.log(Object.getOwnPropertyNames(cat));

// ! Копирование по ссылке - 20:31

// let initialVar = 'initial';
// let anotherVar = initialVar;
// console.log(initialVar);
// console.log(anotherVar);
// initialVar = 'another value';
// console.log(initialVar);
// console.log(anotherVar);

// 1
// 'initial'  |  'initial'
// initialVar | anotherVar
// 2
// 'another...' |  'initial'
// initialVar   |  anotherVar

// const user = {
//   age: 25,
//   name: 'John',
// }
// console.log(user);
// const anotherUser = user;
// console.log(anotherUser);
// user.name = 'James';
// console.log(user);
// console.log(anotherUser);

// 1
// {name: 'John', age: 25} |
// user       anotherUser  |
// 2
// {name: 'James', age: 25} |
// user       anotherUser  |


// ! Сравнение объектов - 20:42
// const user1 = {
//   name: 'John',
// };

// const user2 = {
//   name: 'John',
// };

// console.log(user1 === user2);

// const user3 = user1;
// console.log(user1 === user3);

// console.log({} === {});
// console.log({} == {});
// user2 = user1;
// console.log(user2 === user1);

// Поведение у == и === для объектов одинаковое
// console.log({} === {});

// const user = {
//   name: 'John'
// };

// user.age = 25;
// console.log(user);
// // const user = {};
// let obj = {
//   a: 1
// };
// obj = {
//   b: 2
// }
// console.log(obj);

// const user1 = {
//   name: 'John',
//   age: 25,
//   cart: {},
// };

// const user2 = {
//   name: 'John',
//   age: 25,
//   valid: true,
// };

// let theSame = true;
// for (let propertyName in user1) {
//   if (!user2.hasOwnProperty(propertyName)) {
//     theSame = false;
//     break;
//   }
//   if (user1[propertyName] !== user2[propertyName]) {
//     theSame = false;
//     break;
//   }
// }
// console.log(theSame);

// ! Клонирование объектов - 21:02

// const obj = {
//   age: 25,
//   name: 'John',
// };

// const copy = {};
// for (let name in obj) {
//   if (obj.hasOwnProperty(name)) {
//     copy[name] = obj[name];
//   }
// }
// console.log(copy);
// console.log(obj === copy);
// console.log(obj.name === copy.name);

// obj.test = 'test';
// console.log(copy);

const obj = {
  age: 25,
  name: 'John',
  cart: {
    items: 2,
  }
};

const copy = {};
for (let propertyName in obj) {
  if (obj.hasOwnProperty(propertyName)) {
    copy[propertyName] = obj[propertyName];
  }
}

//1 
// propertyName = 'age'
// obj[propertyName] === 25
// copy[propertyName] = obj[propertyName];
// 2
// ptopertyName = 'name'

// console.log(copy);
// obj.cart.items = 3;
// console.log(obj);
// console.log(copy);

// * Object.assign(target, ...sources)
// https://caniuse.com/#search=object.assign

// const obj = {
//   age: 25,
//   name: 'John',
// };

// const anotherObj = {
//   test: '1',
//   obj: {}
// }

// const copy = {};
// Object.assign(copy, obj, anotherObj);
// console.log(copy);

// console.log(copy.obj === anotherObj.obj);

// Object.assign(copy, obj, anotherObj);
// console.log(copy);
/// ====
// const copy = Object.assign({}, obj);


// ! Object.values(), Object.keys(), Object.entries()
// https://caniuse.com/#search=object.values
// const user = {
//   'id': 1,
//   'name': 'John',
//   'age': 32,
//   'cart': {
//     'date': '2020-03-01',
//     'items': [
//       {
//         'id': 56,
//         'name': 'Car',
//         'price': 35,
//       },
//     ],
//   }, 
//   '0': 'some string',
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// ! Создание объекта

// const literalObject = {};

// const constructorObject = new Object();

// const objectCreate = Object.create({a: 2});
// console.log(objectCreate);

// function User() {};
// const user = new User();
// console.log(typeof user);
// console.log(typeof User);
