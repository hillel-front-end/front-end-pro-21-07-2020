console.log('lection 4');
/**
 * Тайм коды:
 * - Array.prototype.sort() ([].sort())
 * - Создание массива через конструктор
 * 00:19 - Двумерный массив
 * - Доступ к элементам
 * 01:09 Диагонали матрицы
 * - Практика
 */

/**

Практика:

1. В двумерном массиве A размером n на m.
   Заполнить случайными числами в диапазоне `-220 ... 435`.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Найти найменьшее число и
       поменять его местами с первым в массиве
    4. Поменять ряды местами (1 и 2 пункт)
2. Найти элементы массива, которые сильно отклоняются
   от среднего значения (элементов массива). "Отклонение" будет
   вычисляться как процент разности между элементом и средним
   значением к среднему значению. Например, если очередной элемент равен 10,
   а среднее значение массива равно 5, то (10-5)/5 = 1 (100%).
   Т.е. значение элемента превышает среднее значение на 100%.

3. Написать программу, которая сжимает серии массива,
   состоящего из единиц и нулей по следующему принципу:
   например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1]
   преобразуется в [4,7,2,4]

 */

 // ! Array.prototype.sort() ([].sort())
// let arr = [1, 10, 3, 2];
// console.log(arr.sort());
// let sortedArr = arr.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
// let sortedArr = arr.sort((a, b) => a - b);

// ! Создание массива через конструктор
// let arr = [];
// let arr = new Array();
// console.log(arr);
// let arr = new Array('one', 'two', 'three', 'four');
// console.log(arr);
// let arr = new Array(3);
// console.log(arr);
// console.log(arr.length);

// ! Двумерный массив - 19:34
// let twoDimensional = [
//   [1, 1, 1],
//   [1, 1, 1, 2, 3, 4],
//   'some string',
//   false,
// ];
// console.log(twoDimensional);

// --------

// * Доступ к элементам
// let twoDimensional = [
//   [1, 1, 1],
//   [1, 1, 1, 2, 3, 4],
// ];
// console.log(twoDimensional[0][0]);
// twoDimensional[0][0] = 0;
// console.log(twoDimensional[0][0]);

// const twoDimensional = [
//   [1, 10, 3, 4],
//   [1, -10, 2, 22, 10, 10, 22, 222, -222],
// ];

// twoDimensional[0][0] = -22;
// console.log(twoDimensional[0][0]);
// let sum = 0;
// debugger;
// for(let i = 0; i < twoDimensional.length; i++) {
  // console.log(twoDimensional[i]);
  // const sortedRow = (twoDimensional[i]).sort((a, b) => b - a);
  // Sorted row
  // const sortedRow = twoDimensional[i].sort(function(a, b) {
  //   return a - b;
  //   // if (a < b) {
  //   //   return -1;
  //   // }
  //   // if (a > b) {
  //   //   return 1;
  //   // }
  //   // return 0;
  // });
  // console.log('Sorted: ', sortedRow);
  // for(let j = 0; j < sortedRow.length; j++) {
  //   sum += sortedRow[j];
  // }
  // plain row
  // for (let j = 0; j < twoDimensional[i].length; j++) {
  //   sum += twoDimensional[i][j];
  // }
// }

// console.log(sum);

// const sorted = twoDimensional.sort((a, b) => {
//   let sumA = 0;
//   let sumB = 0;
//   console.log('a: ', a);
//   console.log('b: ', b);
//   for (let i = 0; i < a.length; i ++) {
//     sumA += a[i];
//   }
//   for (let i = 0; i < b.length; i ++) {
//     sumB += b[i];
//   }
//   console.log(sumA, sumB);
//   if (sumA > sumB) {
//     return -1;
//   }
//   if (sumA < sumB) {
//     return 1;
//   }
//   return 0;
// });
// console.log(sorted);


// ---------------------------

// ! Диагонали матрицы - 20:24

const n = 10;
const m = 10;

let A = new Array(n);

for(i = 0; i < A.length; i++) {
  // A[i] = new Array(m + Math.floor(Math.random()*10 + 1));
  A[i] = new Array(m);
  for (let j = 0; j < A[i].length; j++) {
    A[i][j] = '*** ';
    // * главная диагональ
    // if (i === j) {
    //   A[i][j] = '000 ';
    // }
    // * Побочная диагональ
    // if (i + j === m - 1) {
    //   A[i][j] = '111 ';
    // }
    // * Элементы ниже главной диагонали
    // if (i > j) { 
    //   A[i][j] = '000 '; 
    // }
     // * Элементы ниже побочной диагонали
      // if (i + j > n - 1) {
      //   A[i][j] = '000 '; 
      // }
      
    // if ( i >= j ^ i + j < n - 1) {
    //   A[i][j] = '***'; 
    // } else {
    //   A[i][j] = '&nbsp;&nbsp;&nbsp;'; 
    // }
    document.write(A[i][j]);
  }
  
  document.write('<br />');
}
console.log(A);

 // for(j = 0; j < A[i].length; j++) {
    //     // A[i][j] = 0;
    //     A[i][j] = i + ',' + j;

        // * главная диагональ
        // if (i == j) { 
        //   A[i][j] = '***'; 
        // }
        // * Побочная диагональ
        // if (i + j == m - 1) {
        //     A[i][j] = '***'; 
        // }

        // * Элементы ниже главной диагонали
        // if (i > j) { 
        //   A[i][j] = '***'; 
        // }

        // * Элементы выше главной диагонали
        // if (i < j) { 
        //   A[i][j] = '***'; 
        // }

        // * Элементы ниже побочной диагонали
        // if (i + j > n - 1) {
        //   A[i][j] = '***'; 
        // }

        // * Побочная диагональ со смещением
        // if (i + j == n - 1 - 3) {
        //   A[i][j] = '***'; 
        // }

        // * Главная диагональ со смещением
        // if (i + 3 == j) { 
        //   A[i][j] = '***'; 
        // }

        // if ( i >= j ^ i + j < n - 1) {
        //   A[i][j] = '***'; 
        // } else {
        //   A[i][j] = '&nbsp;&nbsp;&nbsp;'; 
        // }


//         document.write(' ' + A[i][j]);
//     }

// console.log(A);

// console.log(A);

// ! n-dimensional arrays in the modern web

// -----------------------------

// ! Домашнее задание

/**

1. Создать массив, элементы которого вводит пользователь. Произвести такую замену:
    1 элемент поменять с 2,
    3 элемент поменять с 4,
    5 элемент поменять с 6 и тд.
  Если длина массива нечетная - последний элемент не трогать.

  Пример: было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

2. Создать двумерный массив A размером n на m. Заполнить его случайными числами.
    * Найти ряд, где сумма элементов наименьшая
    * Найти ряд, где сумма элементов найбольшая
    * Поменять ряды местами (1 и 2 пункт)
3. В двумерном массив удалить столбцы, где сумма элементов столбца < 0.
  Массив должен быть размером 10 на 10,
  заполненым случайными числам в диапазоне от -20 до +20
*/
