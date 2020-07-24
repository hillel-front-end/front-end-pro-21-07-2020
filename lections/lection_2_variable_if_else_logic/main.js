console.log('lection 2');

/*
  * Переменные: var, let, const
  * 0:15 - Hoisting. Undefined null
  * 0:32 - Boolean
  * 0:37 - Сравнение чисел: a < b, a > b, a <= b, a >= b, a == b. Приведение типов к числу
  * 0:45 - Логические AND, OR
  * 01:09 - Логическое отрицание - !
  * 01:17 - If/else
  * 01:28 - If...else...if...else - 20:43
  * 01:33 - Switch ... case ... case ... default. Break;
  * 01:45 - Тернарный оператор
*/

// * Название переменных не может быть зарезервированным словом:

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%9A%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0
break, case, class, catch, const, continue,
debugger, default, delete, do, else, export,
extends, finally, for, function, if, import,
in, instanceof, let, new, return, super, switch,
this,throw, try, typeof, var, void, while,
with, yield
*/

// * Переменные: var, let, const

var someVariable = 'string';
someVariable = 'aaa';
console.log(someVariable);
let anotherVariable = 'some string';
anotherVariable = 'another string';
console.log(anotherVariable);

// const cc = 'aaa';
// const SOME_CONST = 'bbb';
// cc = 'bbb';
console.log('-----');


// * Hoisting. Undefined null 19:30
// console.log(preVar);
// var preVar = 'bbb';
// console.log(preVar);
var preVar = undefined;
console.log(preVar);
preVar = 'bbb';
console.log(preVar);

console.log('------');
// console.log(letVar);
// let letVar = 'ccc';
// console.log(letVar);

const arr = [];
console.log(arr[0]);
const obj = {};
console.log(obj.calc);

let someVar = null;

console.log('---');
let someStr = 'string';
let someNumber = 10;
console.log(typeof someStr);
console.log(typeof someNumber);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof '10');

// console.log(hoisting);
// var hoisting = 10;
// console.log(hoisting);

// console.log(digit);
// let digit = 10;
// console.log(digit);

// const str = 'const';
// str = 'another string';

// * Boolean 19:47
let positive = true;
let negative = false;

console.log('---');
console.log(Boolean('string'));

/** Always false */
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
/** */

console.log(Boolean(' '));
console.log(Boolean(1));
console.log(Boolean(-100));
console.log(Boolean(10 - 10));

// * Сравнение чисел: a < b, a > b, a <= b, a >= b, a == b. Приведение типов к числу 19:52
console.log('---');
console.log(10 > 100);
console.log(10 < 100);
console.log(100 <= 100);
console.log(10 >= 100);

console.log(1 + 2 > 4);
console.log(1 + 2 <= 4 + 2);

console.log(22 == 22);
console.log(22 === 22);
console.log(22 == '22');
console.log(22 === '22');
console.log(22 === +'22');
console.log('a' === 'a');
console.log('aaa' > 'abb');
// console.log(10 < 11);
// console.log (1 + 2 == 3);
// * Отличие == и ===

// const someStr = '0';
// const someDigit = 0;
// console.log(someStr == someDigit);
// console.log(someStr === someDigit);
console.log('---');
// * Логические AND, OR - 20:00
// AND - &&
// OR - || (pipe)
console.log(true && true && true);
console.log(true && true);
console.log(true && false);

console.log(true || true || true);
console.log(true || true);

console.log('---');
console.log(true || false);
console.log(false || true);
console.log(false || false);
const boolVar = false;
console.log(boolVar && true);

console.log(boolVar && 'some string');
console.log(boolVar || 'some string');
const str1 = '';
console.log(str1 || 'default string');
const str2 = str1 || 'default' + ' ' + 'string';
console.log(str2);
// console.log(str1 || prompt('please, enter some value'));
console.log(str1 || '');
console.log(false && false);

// let фффф = 'aaa';
// console.log(фффф);

// console.log(true && true && true);
// console.log(true && true && false);
// console.log(true || false);
// var someString = "";
// var newString = someString || "default string";
// console.log(newString);

// * Логическое отрицание - ! 20:24
console.log(!true);
console.log(100 !== 100); // Good
console.log('100' != 100); // Bad

console.log(!false);
console.log(!(false || true));
console.log(!'str');
console.log(!!'str');

// let pos = true;
// let neg = false;
// console.log(!pos); // false
// console.log( !(pos || neg) );
// console.log( !(true || false) );
// console.log( !(true) );
// console.log( false );

// *  If/else 20:32
console.log('---');
// {} - блок инструкций
// {
//   console.log(1);
//   console.log(2);
// }
/*
  if (условие) {
    блок кода
  }
*/

// const digit = 101;
// if (digit < 100) {
//   console.log('Condition is true');
// }
// let someDigit = +prompt('Enter digit');
// if (someDigit < 100) {
//   someDigit += 100;
// }
// console.log(someDigit);

// * if ... else - 20:37
/*
  if (условие) {
    блок кода
  } else {
    блок кода
  }
*/

// let enteredDigit = +prompt('Please enter a digit');
// let enteredDigit = Number(prompt('Please enter a digit'));
// if (enteredDigit != 0) {
//   enteredDigit = enteredDigit * 25;
// } else {
//   enteredDigit -= 100;
// }
// console.log(enteredDigit);

// console.log(NaN === NaN);

// * If...else...if...else - 20:43
/*
    if (условие) {
        блок кода 1
    } else if(условие) {
        блок кода 2
    } else {
        блок кода 3
    }

    if (условие) {
        блок кода 1
    } else if(условие) {
        блок кода 2
    }
*/
// let enteredStr = prompt('choose output method: alert, console, document', '');
// if (enteredStr === 'alert') {
//   alert(1);
// } else if (enteredStr === 'console') {
//   console.log(1);
// } else if (enteredStr === 'document') {
//   document.write(1);
// } else {
//   alert('Choosen method is incorrect!');
// }
console.log('---');
// * Switch ... case ... case ... default. Break; 20:48
// let enteredStr = prompt('choose output method: alert, console, document', '');
// switch (enteredStr) {
//   case 'alert':
//     alert(1);
//     break;
//   case 'alert':
//     alert(2);
//     break;
//   case 'console':
//     console.log(1);
//     break;
//   case 'document':
//     document.write(1);
//     break;
//   default:
//     alert('Choosen method is incorrect!');
// }

// switch (true) { // Bad
//   case 100 === 100:
//     console.log('ss');
//     break;
// }
// const LOADING = 'a';
// const LOADED = 'b';

// let state = LOADING;
// switch (state) {
//   // case 'loading':
//   case LOADING:
//     console.log('loading');
//     break;
//   case LOADED:
//     console.log('loaded');
//     break;
//   default:
//     console.log('unknown');
// }


// * Тернарный оператор - 21:00
// (выражение) ? инструкция : инструкция;
const LOADING = 'a';
const LOADED = 'b';
let state = LOADING;

// const res = (state === LOADING) ? 'a' : 'b';
// let res;
// if (state === LOADING) {
//   res = 'a';
// } else {
//   res = 'b';
// }

// let res = (10 < 100)
//   ? 'a'
//   : (100 > 10)
//     ? 'b'
//     : 'c';

if (true) console.log('a'); // BAD
if (true) {
  console.log('a'); // GOOD
}
