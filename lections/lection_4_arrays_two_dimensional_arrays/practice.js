/**
    
1. В двумерном массиве A размером n на m.
   Заполнить случайными числами в диапазоне `-220 ... 435`.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Найти найменьшее число и
       поменять его местами с первым в массиве
    4. Поменять ряды местами (1 и 2 пункт)
*/
// ! Решение

const n = 10;
const m = 8;
const arr = [];
for (let i = 0; i < n; i++) {
    // arr[i] = new Array(m);
    arr[i] = [];
    for (let j = 0; j < m; j++) {
        const randomNumber = Math.floor(Math.random() * (220 + 435 + 1) - 220);
        arr[i].push(randomNumber);
    }
}
let minRowIndex;
let minRowSum;
let maxRowIndex;
let maxRowSum;
let minNumber = arr[0][0]; // Гипотеза
// let minIndex = arr[0][0];
let minIndexRow = 0;
let minIndexColumn = 0;
for (let i = 0; i < n; i++) {
    let tmpRowSum = 0;
    for (let j = 0; j < m; j++) {
        tmpRowSum += arr[i][j];
        if (arr[i][j] < minNumber) {
            minNumber = arr[i][j];
            minIndexRow = i;
            minIndexColumn = j;
        }
    }
    if (i === 0) { // Гипотеза
        minRowSum = tmpRowSum;
        minRowIndex = 0;
        maxRowIndex = 0;
        maxRowSum = tmpRowSum;
    }
    if (tmpRowSum < minRowSum) {
        minRowIndex = i;
        minRowSum = tmpRowSum;
    }
    if (tmpRowSum > maxRowSum) {
        maxRowIndex = i;
        maxRowSum = tmpRowSum;
    }
}

// console.log(minRowIndex);
// console.log(maxRowIndex);
console.log(arr);
console.log(minIndex);

// swap
const tmp = arr[0][0];
arr[0][0] = arr[minIndexRow][minIndexColumn];
arr[minIndexRow][minIndexColumn] = tmp;

// ! Swap

// 1 2 3 4
// tmp = 1
// 4 2 3 4
// 4 2 3 1

// 1 2 3 4
// 1 2 3 4 1
// 4 2 3 4 1
// 4 2 3 1
