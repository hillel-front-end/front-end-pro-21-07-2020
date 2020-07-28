console.log('lection 3');
/*
    Тайм коды:
    * 00:02 - Циклы
    * -- Предусловие
    * -- Постусловие
    * -- Постусловие
    * -- Цикл со счётчиком for
    * 00:23 - for(;;;) выражения можно пропускать
    * -- Break, continue
    * 00:40 - Решение задачи
    * -- Вложенные циклы
    * -- Пару слов о for...in, for...of
    * 01:03 - МАССИВЫ
    * -- Доступ к элементам массива
    * 01:15 - Изменение длины массива с помощью length
    * -- Добавление элемента в массив
    * -- Оператор delete
    * -- Перебор массивов с помощью цикла for
    * 01:23 Добавление элемента в конец массив PUSH
    * -- Добавление элемента в начало массива UNSHIFT(...elements)
    * -- Получить последний элемент массива и удалить его из массива POP
    * -- Получить первый элемент и удалить его из массива SHIFT
    * -- Метод slice(start, [end])
    * -- Метод splice(start, deleteCount, ...items)
    * 01:36 Метод join(separator)
    * -- Метод Array.concat(Array)
    * -- typeof [], Array.isArray()
    * -- Генерация рандомных чисел
*/

// Включить запись экрана
// Спросить за домашки

// * Циклы 00:02

// Для многократного повторения одного участка кода предусмотрены *циклы*.

// * Предусловие

/* 
    while(условие) {
        блок кода
    }
*/

// let counter = 0;
// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }
// let counter = 0; // start
// while(counter <= 5) {
//   console.log(counter);
//   counter++; 
// }
// console.log('after cycle', counter);

// * Постусловие

/* 
    do {
        блок кода
    } while(условие)
*/

// let counter = 0; // start
// do {
//   console.log(counter);  
//   counter++; 
// } while(counter <= 10);
// console.log('after cycle', counter);

// ---------------------------------------

// * Цикл со счётчиком for

// 1..10
// for(1;2;3){
//     4
// }
// 1 - зона начальных условий
// 2 - условие выполнения цикла
// 3 - действие между итерациями
// 4 - блок кода

// * Последовательность
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }
// let i = 0;
// for(; i <= 10; i++) {
//     console.log(i);
// }
// for (; i <= 10;) {
//     console.log(i);
//     i++;
// }
// i, j, k 
// for(i = 0; i <= 5; i++) {
//     console.log(i); 
// }

// for(i = 0; i <= 5; i++) {
//     console.log(i); 
// }

// --------------------------------------
// for (let i = 0, j = 120; i <= 10; i++, j *= 2) {
//     console.log(i, j);
// }
// for(i = 0, j = 120; i <= 5 || j <= 1000; i++, j*=2) {
//     console.log(i, j);
// }

// for(i = 0; i <= 100; i++) {
//     if( i % 2 == 0 ){
//         console.log(i*i);
//     }
// }

// * for(;;;) выражения можно пропускать - 19:38

// for (i = 10; i--;) {
//   console.log(i);
// }
// for (i = 10; i > -5; i--) {
//     console.log(i);
// }
// for (i = 10; i--;) {
// 	console.log(i);
// }
// ---------------------------------------

// * Break, continue
// let counter = 0;
// while(true) {
//     console.log(counter);
//     if (counter > 10) {
//         break;
//     }
//     counter++;
// }
// let sum = 0;
// while(true) {
//     let value = +prompt('please, eneter a digit', '');
//     if (!value) {
//         break;
//     }
//     sum += value;
// }
// console.log(sum);

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// * Вывести нечетные числа - 19:55
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// for (let i = 0; i < 10; i++) {

// если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// * Вложенные циклы

// for (i = 0; i < 10; i++) {
//     for (j = 0; j < 10; j++) {
//         console.log(i, j);
//     }
// }



// * Пару слов о for...in, for...of

// Практика

// Ввести с клавиатуры 2 числа a и b (где a <<< b).
//       Запустить цикл перебора от a до b.
//       Вывести в консоль квадраты чётных чисел.

// let start = +prompt('start');
// let end = +prompt('end');
// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         console.log(i * i);
//     }
// }

// * МАССИВЫ

// let a = [];
// let arr = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];
// let arr = [1, 2, 3, 4, false, true, 'gello', 2];
// console.log(arr);
// console.log(arr.length);

// * Доступ к элементам массива
// console.log(arr[0] + arr[2]);
// console.log( arr[0] + A[2] );
// console.log(arr);
// arr[1] = 10;
// console.log(arr);


// arr[2] = 60;

// console.log(arr);
// console.log(arr[2]); // 23
// console.log(arr[0]); // 7

// let arr = [];`
// arr[0] = 1;
// console.log(arr);

// let arr = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];

// console.log(arr[arr.length - 5]);

// console.log(arr[arr.length - 1]); // last

// ----------------------------------
// * Изменение длины массива с помощью length - 20:25
// let A = [];
// A.length = 5;
// console.log(A);
// console.log(A[1000]);

// let arr = [];
// let index = 0;
// while(true) {
//     let digit = +prompt('enter a digit');
//     if (!digit) {
//         break;
//     }
//     arr[index] = digit;
//     index++;
// }
// console.log(arr);

// let arr = [0.1, 'string', true, false, null, NaN];
// console.log(arr);


// for(i = 0; i < A.length; i++) {
//     A[i] = prompt();
// }

// console.log(A);

// * Добавление элемента в массив

// let arr = [1, 2];
// arr[arr.length] = 3;
// console.log(arr);

// let arr = [];
// // let index = 0;
// while(true) {
//     let digit = +prompt('enter a digit');
//     if (!digit) {
//         break;
//     }
//     arr[arr.length] = digit;
//     // index++;
// }
// // [] -> 0
// // [9] -> 1
// console.log(arr);

// * Оператор delete
// let arr = [1, 2, 3];
// delete arr[1]; // arr[1] = undefined;
// console.log(arr);

// * Перебор массивов с помощью цикла for
// let arr = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let index = 0;
// while(index < arr.length) {
//   console.log(arr[index]);
//   index++;
// }
// B = [false, true, 'hello', 10];

// for(i = 0; i < B.length; i++) {
//     // console.log(B[i]);

//     if (i == 1) {
//         break;
//     }
// }
// B.length = 2;

// * Добавление элемента в конец массив PUSH - 20:38
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);
// let arr = [];
// while(true) {
//     let digit = +prompt('enter a digit');
//     if (!digit) {
//         break;
//     }
//     arr.push(digit);
// }
// console.log(arr);

// * Добавление элемента в начало массива UNSHIFT(...elements)
// let arr = [1, 2, 3];
// arr.unshift(4);
// arr.unshift(4, 5, 6);
// console.log(arr);

// * Получить последний элемент массива и удалить его из массива POP

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// * Получить первый элемент и удалить его из массива SHIFT

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// * Метод slice(start, [end])

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(arr.slice(2, 5));
// console.log(arr);
// console.log(arr.slice(0, -2));
// console.log(arr.slice(2));

// * Метод splice(start, deleteCount, ...items)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(arr.splice(0, 2));
// console.log(arr);
// console.log(arr.splice(2, 2, 'string', 'a', 'b'));
// console.log(arr);

// * Метод join(separator) - 20:51
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.join());
// console.log(arr.join(' + '));
// let str = arr.join();
// console.log(str.split());
// for (i = arr.length; i--;) {
//     arr[i] = '' + arr[i];
// }
// console.log(arr);
// arr.reverse();
// console.log(arr);

// * Метод Array.concat(Array)
// let arr1 = [1, 2, 3];
// let arr2 = [4];
// console.log(arr1.concat(arr2));
// console.log(arr1, arr2);

// * typeof [], Array.isArray()
// console.log(typeof []);
// let arr = [];
// let obj = {};
// console.log(typeof arr === 'object');
// console.log(typeof obj === 'object');
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// ----------------------------------


// * Генерация рандомных чисел
// console.log( Math.random() ); // 0 .. 1
// let arr = ['a', 'b', 'c'];
// console.log(Math.floor(Math.random() * 201) - 100);
