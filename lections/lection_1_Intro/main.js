/*
  0:0 - Вступление
  0:25 - Инструкции
  Вывод/ввод данных
  0:30 - Математические операции
  0:35 - Переменные
  Типы данных
  0:45 - Операция сложения
  Приведение типов
  NaN, Infinity
  Undefined, null
  Boolean
  01:10 - Смарт операции
  Инкремент/Декремент
  Пост/пре инкремент
  Создание и наименнование переменных
  Math
*/

// Инструкции
// alert('1') // Ошибка
// [1,2].forEach(alert);
// alert('3');

// Вывод/ввод данных
// alert('1');
// console.log(1);

// prompt('Ваше имя');

// Математические операции
// console.log(10 - 2);
// console.log(10 + 2);
// console.log(10 / 2);
// console.log(10 * 2);

// Переменные
a = 10;
console.log(a);
b = 2;
console.log(a + b);
console.log(a, b);


// Типы данных
a = 10;

str = 'string';
str1 = "string";
str2 = "stri'ng";
str3 = 'stri""ng';
str4 = 'str\'ing';
str5 = 'John';

// Операции - 45

a = 10;
b = 2;
console.log(a + b);

s1 = 'Hello ';
s2 = 'world!';
console.log(s1 + s2);

// Приведение типов
console.log(a + s1);
console.log('10' + 'Hello ');

console.log(s2 + b);

console.log(100 / 2 + 5 * 3 + ' hello');
console.log('hello ' + 100 / 2 * 3);

a = -70;
b = +10;

s5 = +'10';
console.log(s5);

console.log('-------');

s6 = parseInt('10');
console.log(s6);

// Операции над числами

c = 1 / 0;
console.log(c);
console.log(Infinity);
console.log(0 / 0); // NaN - Not a number
console.log(parseInt('aaa'));

d = (5 + 5) / 2;
console.log(d);
e = 10 / ( 1 + 1);
console.log(e);

g = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
console.log(g);
h = 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009;
console.log(h);

console.log('Max number: ', Number.MAX_VALUE);
console.log('Min number: ', Number.MIN_VALUE);

// Другие типы данных
console.log(null);
console.log(undefined);
// Boolean
console.log(true);
console.log(false);

console.log('------------------');
// Смарт операции - 20:24

a1 = 10;
a1 += 2;
a1 = a1 + 2;
console.log(a1);

b1 = 20;
b1 -= 2;
console.log(b1);

c1 = 2;
c1 = c1 * 2;
c1 *= 2;
d1 = 4;
d1 = d1 / 2;
d1 /= 2;

console.log('---------');
// Инкремент/Декремент
e1 = 10;
e1++;
console.log(e1);
e1--;
console.log(e1);
console.log('---------');
++e1;
console.log(e1);
--e1;
console.log(e1);

// Пост/пре инкремент
console.log('---------');
v1 = 2;
console.log(v1++);
console.log(v1);
console.log(++v1, v1 + 1);
// console.log(v1++);
// console.log(v1);

// console.log(v1);
// v1 = v1 + 1;
// console.log(v1);

// %
console.log(11 % 2);
g = 11;
g %= 2;
console.log(g);

// Создание переменных
var a = 10;
var a, b = 10;
// const cns = 10;
// let someValue = 20;
var _a;
var $b;
var someValue = 'some string'; // Camel case. Good 
var some_value = 'some'; // Bad
var a = 10;
var b = 2;
var sum = a + b;
var M = 2;

console.log('------');
// Math
console.log(Math.PI);
// Pow
console.log(2 * 2 * 2);
console.log(2 ** 3);
console.log(Math.pow(2, 3));
// Random
console.log(Math.random());

// toFloor
console.log(10 / 3);
console.log(Math.floor(10 / 3));
// toFixed
console.log((10 / 3).toFixed(2));
console.log((0.000003).toFixed(2));
// toCeil
console.log(Math.ceil( 10 / 3));

// Prompt
var name = prompt('What is your name?');
console.log(name);


console.log('hello ' + 100 - 2 - 3);
console.log('hello  100' - 2);
console.log('' + 100);
console.log('\\');
console.log('\\\\a\\');
