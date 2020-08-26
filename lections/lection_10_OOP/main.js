console.log('Lection 10');

/**
 * Тайм коды:
 * 00:03 - Inheritance (наследование)
 * - Object.create
 * - 00:33 - Prototype
 * - 00:37 - Class extends
 * - Цепочка вызовов
 */

// ! Inheritance (наследование) - 19:34

// * Object.create

// const Animal = {
//   constructor(name, hasTail, age) {
//     this.name = name;
//     this.hasTail = hasTail;
//     this.age = age;
//     return this;
//   },
//   showTail() {
//     console.log(`I ${this.hasTail ? 'has' : 'does not have'} a tail`);
//   }
// };

// // const john = Person.constructor('John', false, 25);
// // console.log(john);

// const Person = Object.create(Animal);
// // console.log(Person);
// Person.constructor = function(name, age) {
//   Animal.constructor.call(this, name, false, age);
//   return this;
// };

// Person.type = 'person';

// Person.voice = function() {
//   console.log('Hello, my name is: ', this.name);
// }

// const john = Object.create(Person).constructor('John', 25);
// console.log(john);
// const jane = Object.create(Person).constructor('Jane', 24);
// console.log(jane);
// console.log(john === jane);
// john.showTail();
// jane.showTail();

// const Cat = Object.create(Animal);
// Cat.constructor = function(name, age) {
//   Animal.constructor.call(this, name, true, age);
//   return this;
// }

// Cat.voice = function() {
//   console.log('Meow!!!', this.name);
// }
// Cat.changeName = function(newName) {
//   this.name = newName;
// }

// Cat.type = 'cat';

// const jack = Object.create(Cat).constructor('Jack', 2);
// console.log(jack);

// jane.voice();
// jack.voice();
// jack.changeName('Leo');
// jack.voice();


// Person.constructor = function (name, age) {
//   Animal.constructor.call(this, name, false, age);
//   return this;
// };
// Person.voice = function () {
//   console.log('Hello, my name is: ' ,this.name);
// }

// const john = Object.create(Person).constructor('John', 25);
// console.log(john);
// john.voice();
// john.showTail();

// * Prototype - 20:04

// function Animal(name, hasTail, age) {
//   this.name = name;
//   this.hasTail = hasTail;
//   this.age = age;
// };

// Animal.prototype.showTail = function () {
//   console.log('I ' + (this.hasTail ? 'has' : 'does not have ') + ' tail' );
// };

// function Person(name, age) {
//   Animal.call(this, name, false, age);
// }

// Person.prototype.voice = function () {
//   console.log(`My name is: ${this.name}`);
// }

// Person.prototype = Animal.prototype;

// Person.prototype = Object.create(Animal.prototype);
// Person.prototype.constructor = Person;

// Person.prototype.voice = function () {
//   console.log(`My name is: ${this.name}`);
// };

// const john = new Person('John', 25);
// console.log(john);
// john.voice();
// john.showTail();

// console.log(Animal.prototype);
// console.log(Animal.prototype.constructor === Animal);
// console.log(Person.prototype);

// Person.prototype = Object.create(Animal.prototype);
// Person.prototype.constructor = Person;

// const person = new Person('John', 25);
// console.log(person);

// person.showTail();

// function Cat(name, age) {
//   Animal.call(this, name, true, age);
// }
// Cat.prototype = Object.create(Animal.prototype);
// console.dir(Cat);
// Cat.prototype.constructor = Cat;

// Cat.prototype.voice = function() {
//   console.log('Meow!!!');
// }

// const jack = new Cat('Jack', 2);
// console.log(jack);
// jack.showTail();
// jack.voice();

// $('.some-element').show();
// * Class extends - 20:38

// class Animal {
//   constructor(name, hasTail, age) {
//     this.name = name;
//     this.hasTail = hasTail;
//     this.age = age;
//   }

//   showTail() {
//     console.log('I ' + (this.hasTail ? 'has' : 'does not have ') + ' tail' );
//   }

//   getNameAge() {
//     return `${this.name}_${this.age}`;
//   }
// }

// class Person extends Animal {
//   constructor(name, age) {
//     super(name, false, age);
//   }
//   voice() {
//     console.log('Hello, my name is: ' ,this.name);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, true, age);
//   }
//   voice() {
//     console.log('Meow!!!');
//     console.log(super.getNameAge());
//   }
// }

// const john = new Person('John', 25);
// console.log(john);

// const jack = new Cat('Jack', 2);
// console.log(jack);

// john.showTail();
// jack.showTail();

// john.voice();
// jack.voice();


// ! Цепочка вызовов

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   voice() {
//     console.log('Hello, my name is: ', this.name);
//     return this;
//   }
//   logAge() {
//     console.log(`Person: ${this.name} with age: ${this.age}`);
//     return this;
//   }
// }

// const john = new Person('John', 25);
// // const tmp = john.voice();
// // console.log(tmp);

// john.voice().logAge(); // john.voice() === john


// ! Практика
/**
 * Создать класс new SuperArray(n, m, { min: 10, max: 55 }),
 * который создаст массив размерностью n на m и
 * заполнит случайными числами в диапазоне options.min - options.max.
 * Массив сохраняется в екземпляр класса SuperArray.
 * 1. Создать метод render(separator), в прототипе.
 *    Который выведет двумерный массив в документ.
 *    С разделителем separator, под массивом.
 * 2. Создать метод clear(direction, k), где direction может быть
 *    "row" или "column", а k - номер строки или столбца,
 *    который нужно очистить. (поставить 0)
 * 3. Создать Метод setMarker({ x: 6, y: 9 }),
 *    который устанавливает маркер "&" в в переданную точку.
 * 4. Создать метод goTo({ x: 2, y: 4 }), маркер передвигается в указанную точку.
 * 5. Создать метод shift(direction), где direction может иметь
 *    значение "left", "right", "top", "bottom",
 *    и маркер сдвинется в указанную сторону на 1 шаг.
 */
