console.log('Lection 18');

/**
 * 
 */

/**
 * ! JSON - 19:19
 * 
 * Типы данных:
 * - Объекты
 * - Массивы
 * - Примитивы:
 *   - Строки
 *   - Числа
 *   - Логические значения true/false
 *   - null 
 */

/**
 * JSON.stringify
 */

// let person = {
//   name: 'Bill',
//   surname: 'Gates',
//   age: 64,
//   isActive: true,
//   skills: ['C++', 'JS'],
//   prop: null,
//   obj: {
//     name: 'test',
//   },
//   birth: new Date('1993-01-01'),
// };

// console.log(JSON.stringify(person));

// let anotherPerson = {
//   name: 'Jane',
//   surname: 'White',
//   age: 28,
//   skills: ['Go', 'JS'],
//   obj: {
//     name: 'test',
//   }
// };

// person.children = anotherPerson;
// anotherPerson.parent = person;

// console.log(JSON.stringify(person));
// console.log(JSON.stringify(person, ['name', 'age', 'obj'], 2));
// console.log(JSON.stringify(anotherPerson, function (key, value) {
//   return key !== 'children' ? value : undefined;
// }));

// console.log(JSON.stringify(person, undefined, 2));

// console.log(JSON.stringify(person, undefined, 2))

/**
 * * JSON.parse - 19:35
 */
// const json = `
// {
//   "name": "Bill",
//   "surname": "Gates",
//   "age": 64,
//   "isActive": true,
//   "skills": [
//     "C++",
//     "JS"
//   ],
//   "prop": null,
//   "obj": {
//     "name": "test"
//   }
// }
// `;
// const json = `{"name":"Bill","surname":"Gates","age":64,"isActive":true,"skills":["C++","JS"],"prop":null,"obj":{"name":"test"},"birth":"1993-01-01T00:00:00.000Z"}`;

// console.log(JSON.parse(json));
// console.log(JSON.parse(json, function(key, value) {
//   console.log(key, value);
//   return key === 'birth' ? new Date(value) : value;
// }));

// ! WebStorage - 19:46

// * LocalStorage vs SessionStorage

// localStorage.setItem('token', 'some value');
// let value = localStorage.getItem('token');
// console.log(value);

// localStorage.removeItem('token');
// console.log(localStorage.getItem('token'));

// localStorage.setItem('token', 'some token');
// console.log(localStorage.getItem('token'));
// localStorage.setItem('token', 'another token');
// localStorage.clear();
// console.log(localStorage.getItem('token'));


// let person = {
//   name: 'Bill',
//   surname: 'Gates',
//   age: 64,
//   skills: ['C++', 'JS'],
// };

// let personJson = JSON.stringify(person);
// localStorage.setItem('person', personJson);
// const json = localStorage.getItem('person');
// const person = JSON.parse(json);
// console.log(person);

// sessionStorage.setItem('token', 'dfadasfasfafs');
// console.log(sessionStorage.getItem('token'));

// * Event

// window.addEventListener('storage', event => {
//   console.log(event);
// });

// localStorage.setItem('token', 'aaaaaa');


/**
 * ! Object descriptors
 */

// ! get/set

// const person = {
//   // name: 'John',
//   // surname: 'White',
//   get title() {
//     return `${this.name} ${this.surname}`;
//  },
//  set title(value) {
//    const [name, surname] = value.split(' ');
//    this.name = name;
//    this.surname = surname;
//  }
  // get age() {
  //   return 25;
  // },
  // set age(value) {
  //   if (value <= 0) {
  //     throw new Error('invalid value');
  //   }
  //   this._age = value;
  // }
// };
// console.log(person.title);
// person.age = -1;
// person.title = 'John White';
// console.log(person);
// console.log(person.age);
// person.age = 26;
// console.log(person);

// ! атрибуты свойств (writable, configurable, enumerable) . Дескрипторы свойств
const person = {
  name: 'John',
  _age: 25,
  get age() {
    return this._age;
  },
  set age(value) {
    this._age = value;
  },
};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
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
 * @Practice
 * 
 * 1. Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа).
 *    При нажатии на Click - counter увеличивается. При перезагрузке страницы counter должен сохраняться.
 * 2. Создать кнопку ClearCounters()
 * 3. Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.
 * 4. При увеличении counter-а - каждое значение до 50 должно окрашивать соответствующий блок в случайно сгенерированный цвет.
 *    Цвета генерируются при изменении counter-a и сохраняются в Storage. Когда значение доходит до 50 - применяется цвет по умолчанию.
 *   'this.style.backgroundColor = "rgb(x, y, z)";' -> x = getRand(256) y = getRand(256) z = getRand(256)
 * 
 * @Homework
 * 
 * • Все данные должны записываться в localStorage и быть доступными на странице после перезагрузки
 * • Все изменения с списком должны сохраняться после обновления страницы
 */
