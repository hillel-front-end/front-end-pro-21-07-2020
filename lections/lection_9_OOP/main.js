console.log('Lection 9');
/**
 * Тайм коды:
 * 00:07 - Object create
 * 00:38 - Function constructor
 * 01:00 - Return value from constructor
 * 01:09 - Prototype
 * 01:28 - Class
 * 01:33 - Class. Static
 * - Практика
 */

// function doFunc(a, b, func) {

//   // return sum;
//   // return 3;
//   return func(a, b);
// }
// function sum(a, b) {
//   return a + b;
// }
// function multiply(a, b) {

// }

// doFunc(1, 2, sum);
// ! Object.create - 19:27

// const methods = {
//   showName: function() {
//     console.log(this.name);
//   }
// }
// const person = {
//   name: 'John',
//   age: 25,
//   __proto__: methods,
// };
// console.log(person.__proto__.toString());

// const person = {
//   name: 'John',
//   age: 25,
//   // greet: function() {
//   //   console.log('Him my name is ' + this.name);
//   // },
//   greet() {
//     console.log('Him my name is ' + this.name);
//   },
// };

// const anotherPerson = {
//   name: 'Jane',
//   age: 24,
//   greet() {
//     // console.log('Him my name is ' + this.name);
//     console.log(`Hi, my name is ${this.name} ${this.age}`); // interpolation
//   },
// };
// anotherPerson.greet();
// const Person = {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//     return this;
//   },
//   greet() {
//     console.log(`Hi, my name is ${this.name} ${this.age}`);
//   }
// };

// console.log(Person);
// Person.constructor('John', 25);
// console.log(Person);

// Object.create(Prototype);

// console.log(Person);


/**
 * Object.create(Person)
 * {
 *    __proto__: Person
 * }
 */
// const john = Object.create(Person).constructor('John', 25);
// // john.constructor('John', 25);
// // console.log(john.greet());
// console.log('John', john);
// john.greet();
// // john.greet();
// const jane = Object.create(Person).constructor('Jane', 24);
// console.log('Jane: ', jane);
// jane.greet();
// console.log(jane.toString());
// console.log(" " + jane);
// console.log(+jane);

// const anotherPerson = {
//   name: 'John',
//   age: 25,
//   greet: function() {
//     console.log('Him my name is ' + this.name);
//   },
// };


// const Person = {
//   constructor: function (name, age) {
//     this.name = name;
//     this.age = age;
//   },
//   greet: function () {
//     console.log('My name is ' + this.name);
//   }
// }

// const somePerson = Object.create(Person);
// console.log(somePerson);
// somePerson.constructor('John', 26);
// somePerson.greet();

// ! Function constructor -- 19:58

/**
 * class Person {
 *    hasTail
 *    hasPaws
 *    constructor(name) {
 *      
 *    }
 *    voice() {
 *    }
 * }
 * var person = new Person('John');
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hi, my name is ${this.name} ${this.age}`);
//   }
// };

// const john = new Person('John', 25);
// console.log('John: ', john);
// john.greet();
// // ---- 
// const jane = new Person('Jane', 24);
// console.log('Jane: ', jane);
// jane.greet();

// new Person('John', 25)
// var context = {}; - context
// Person.call(context, 'John', 25); -- this.name = name ==== context.name = name; this.age ==== context.age = age;
// {name: 'John', age: 25, greet() {console.log...}}

//  const person = {
//    doSomething: Person,
//  };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log('Hi my name is: ' + this.name);
//   }
// }

// ! Return value from constructor -- 20:20


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log('Person is called');
//   this.greet = function () {
//     console.log('Hi my name is: ' + this.name);
//   }
//   // return 1;
//   // return {
//   //   someProperty: 'test',
//   // };
//   // return 1;
//   // return {
//   //   name: name,
//   // }
// }
// console.log(Person('John', 25));
// const john = new Person('John', 25);
// console.log(john);

// ! Prototype - 20:29

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log('Hi my name is: ' + this.name);
//   }
// }

// const john = new Person('John', 25);
// const jane = new Person('Jane', 24);
// console.log(john.greet === jane.greet);

// console.dir(Person);

// function Animal() {}
// console.dir(Animal);
// console.log(Person.prototype);

/**
 * new Person('John');
 * var context = {};
 * Person.call(context, 'John');
 * context.name = 'John'....
 * context.__proto__ = Person.prototype;
 */
// const john = new Person('John', 25);
// console.log(john);
// console.log(john.__proto__ === Person.prototype); // [[Prototype]] === __proto__


/**
 * const obj1 = {}
 * const obj2 = obj1;
 * obj1 === obj2 - true
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // this.greet = function () {
//   //   console.log('Hi my name is: ' + this.name);
//   // }
// }

// Person.prototype.greet = function () {
//   console.log('Hi my name is: ' + this.name);
// };

// Person.prototype.giveMeAge = function() {
//   return this.age;
// };

// Person.prototype.changeAge = function(age) {
//   this.age = age;
//   return this;
// };

// const john = new Person('JOhn', 25);
// console.log(john);
// // console.log(john.giveMeAge());
// // console.log(john.changeAge(30));
// // console.log(john.giveMeAge());
// const jane = new Person('Jane', 24);
// console.log(john.greet === jane.greet);
// john.greet();
// jane.greet();

// Person.prototype.voice = function () {
//   console.log('Hi, my age is: ', this.age);
// };

// const somePerson = new Person('John', 25);

// console.log(somePerson);
// somePerson.greet();

// const anotherPerson = new Person('Jane', 30);
// console.log(somePerson.greet === anotherPerson.greet);
// console.log(somePerson.voice === anotherPerson.voice);

// ! Class - 20:48

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log('Hi my name is: ' + this.name);
//   }
// }

// const john = new Person('John', 25);
// console.log(john);
// const jane = new Person('Jane', 24);
// console.log(jane);

// class Person {
//   gender = 'female';

//   static type = 'Person';

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(this);
//   }
// }

// const somePerson = new Person('Jane', 25);
// somePerson.greet();

// ! Class. Static -- 20:53

// class Person {
//   static gender = ['male', 'female'];

//   someValue = 2;
//   // static createPerson
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log('show from constr: ', this.someValue);
//     // const someValue = 1;
//   }
//   greet() {
//     console.log(this.name);
//   }
// }

// const john = new Person('JOhn', 25);
// console.log(john);
// console.log(Person.gender);
// console.dir(Person);

// function Person(name) {
//   this.name = name;
// }

// console.dir(Person);
// Person.gender = ['male', 'female'];
// console.dir(Person);

// class Person {
//   static gender = ['male', 'female'];

//   // someValue = 2;
//   static createPerson = function(name, age) {
//     if (age > 25) {
//       return new Error('age should be less then 25');
//     }
//     return new Person(name, age);
//   }
//   // static createPerson
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     // const someValue = 1;
//   }
//   greet() {
//     console.log(this.name);
//   }
// }

// const john = Person.createPerson('John', 24);
// console.log(john);
