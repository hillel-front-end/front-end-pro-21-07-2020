console.log('Lection 16');

/**
 * Тайм коды:
 * * 00:03 - forEach(item, index, arr) - 19:18
 * * 00:09 - map((item, index, arr)) - 19:24
 * * 00:16 - filter(item, index, arr) - 19:31
 * * 00:23 - Композиция map, filter - 19:38
 * * 00:42 - some/every - 19:57
 * * --:-- - flat
 * * 00:59 - concat - 20:14
 * * 01:01 - reduce(acc, item, index, arr) - 20:16
 * * 01:15 - find - 20:30
 * * 01:18 - Итератор - 20:33
 * * --:-- - Обратная итерация по строке (Reverse iteration over string)
 * * --:-- - Практика рекурсии + Array methods
 */


/**
 * ! forEach(item, index, arr) - 19:18
 */

//  const list = [1, 2, 3, -22, 'a', 'b', 'c', { a: true }];
// console.log(Array.prototype);
//  list.forEach(function(item, index, arr) {
//    console.log(item, index, arr);
//  });

// const items = document.querySelectorAll('ul > li');
// // console.log(items);
// items.forEach(function(item, index, list) {
//   console.log(item, index, list);
// });

/**
 * ! map((item, index, arr)) - 19:24
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//   },
// ];

// console.log(userCollection);

// const updatedCollection = userCollection.map(function(user, index, collection) {
//   // console.log(user, index, collection);
//   return {
//     id: user.id,
//     name: user.name,
//     surname: user.surname,
//     title: `${user.name} ${user.surname}`,
//   };
// });

// console.log(updatedCollection);
// console.log(userCollection);

/**
 * ! filter(item, index, arr) - 19:31
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//     age: 25,
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 20,
//     isActive: true,
//   },
//   {
//     id: 3,
//     name: 'David',
//     surname: 'Black',
//     age: 22,
//     isActive: false,
//   },
// ];

// const filteredCollection = userCollection.filter(function(item, index, collection) {
//   // if (item.age < 25) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   // return item.age < 25;
//   // if (item.age < 25 && item.isActive) {
//   //   return true;
//   // }
//   // return false;
//   return item.age < 25 && item.isActive;
// });
// const filteredCollection = userCollection.filter(item =>
//   item.age < 25 && item.isActive
// );


// console.log(userCollection);
// console.log(filteredCollection);

/**
 * ! Композиция map, filter - 19:38
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//     age: 25,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 20,
//   },
// ];


// const container = document.createElement('ul');
// const newCollection = userCollection
//   .filter(item => item.age < 25)
//   .map(user => {
//     return {
//       id: user.id,
//       name: user.name,
//       surname: user.surname,
//       title: `${user.name} ${user.surname}`,
//     };
//   })
//   .map(user => {
//     const element = document.createElement('li');
//     element.innerHTML = user.title;
//     return element;
//   })
//   .forEach((element, index, collection) => {
//     container.appendChild(element);
//   });
  // .forEach();

  // document.body.appendChild(container);

// const filteredCollection = userCollection.filter(user => user.age < 25);
// const collectionWithTitle = filteredCollection.map(user => {
//   return {
//     id: user.id,
//     name: user.name,
//     surname: user.surname,
//     title: `${user.name} ${user.surname}`,
//   };
// });

// const nodeCollection = collectionWithTitle.map(user => {
//   const $element = document.createElement('li');
//   $element.textContent = user.title;

//   return $element;
// });

// console.log(nodeCollection);

// console.log(newCollection);
  // .forEach(element => {
  //   container.appendChild(element);
  // });
// console.log(container);


// ! some/every - 19:57

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//     age: 25,
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 20,
//     isActive: true,
//   },
// ];

// const some = userCollection.some(user => {
//   return !user.isActive;
// });
// console.log(some);

// const every = userCollection.every(user => {
//   return user.isActive;
// });
// console.log(every);

// const arr = [1, 2, 3, '1', '2', NaN];
// const arr = [1, 2, 3];

// const allNumbers = arr.every(item => {
//   return typeof item === 'number' && !isNaN(item);
// });
// console.log(allNumbers);






// const numberCollection = arr.every(item => typeof item === 'number' && !isNaN(item));
// console.log(numberCollection);

/**
 * ! flat
 */
// const arr = [[1, 2], [3, 4], {a: true}, 1, 2, 'str'];
// console.log(arr.flat());
// console.log(arr.flat() === arr);


/**
 * ! concat - 20:14
 */
// const arr = [1, 2];
// const res = arr.concat([3, 4], ['a', 'b', 'c']);
// console.log(res);
// console.log(arr);

/**
 * ! reduce(acc, item, index, arr) - 20:16
 */

const list = [-72,6,4,37,-62,89,-7,63];

let sum = 0;

for(let i = 0; i < list.length; i++) {
    if (list[i] < 0) {
      continue;
    }
    sum += list[i];
}
// console.log(sum);

// const res = list.reduce(function(acc, item, index, list) {
//   if (item > 0) {
//     acc += item;
//   }
//   return acc;
// }, 0);
// const res = list.reduce((acc, item) =>
//   item > 0 ? acc + item : acc, 0);

// console.log(res);

// 1: 0, -72, 0, list => 0
// 2: 0, 6, 1, list => 0 + 6 = 6
// 3: 6, 4, 2, list => 6 + 4 = 10
// 4:

// const res = list.reduce(function(sum, value, index, arr){
//     // console.log(sum, value, index);
//     if (value < 0) return sum;

//     return sum + value;
// });

// const arrs = [[5,7,78,8],[3,7,7,453],[1,2,3,4221,412,4]];

// const res = arrs.reduce(function(prev, item){
//     return prev.concat(item);
// }, [])

// console.log(res);

/**
 * ! find - 20:30
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//   },
// ];

// const john = userCollection.find(function(user) {
//   return user.name === 'John';
// });
// console.log(john);


 /**
  * ! Practice
  */
 // Deep merge
// const treeDeep = {
//   value: 'Item 0',
//   children: [
//       {
//           value: 'Item 1',
//           children: [
//               {
//                   value: 'Item 4'
//               },
//               {
//                   value: 'Item 5',
//                   children: [
//                       {
//                           value: 'Item 13'
//                       }
//                   ]
//               },
//               {
//                   value: 'Item 6',
//                   children: [
//                       {
//                           value: 'Item 14'
//                       },
//                       {
//                           value: 'Item 15'
//                       }
//                   ]
//               }
//           ]
//       },
//       {
//           value: 'Item 2',
//           children: [
//               {
//                   value: 'Item 7'
//               },
//               {
//                   value: 'Item 8'
//               },
//               {
//                   value: 'Item 9'
//               }
//           ]
//       },
//       {
//           value: 'Item 3',
//           children: [
//               {
//                   value: 'Item 10'
//               },
//               {
//                   value: 'Item 11'
//               },
//               {
//                   value: 'Item 12'
//               }
//           ]
//       }
//   ]
// }

// function deepMerge(node) {
//   if (!node.children) {
//     return node.value;
//   }
//   const list = node.children.map(function (leaf) {
//     return deepMerge(leaf);
//   });
//   console.log(list);

//   return [node.value].concat(list.flat());
// };

// const result = deepMerge(treeDeep);
// console.log(result);

// ! Итератор - 20:33

// function range(from, to, step = 1) {
//   let current = from - step;
//   return {
//     [Symbol.iterator]: function () {
//       return {
//         next() {
//           current += step;
//           // return current;
//           return {
//             value: current,
//             done: current > to
//           }
//         }
//       }
//     }
//   };
// };

// const res = range(0, 4, 1);
// const obj = res[Symbol.iterator]();
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// for (let item of res) {
//   console.log(item);
// }

// function range(from, to, step = 1) {
//   let current = from;
//   // return {
//   //   next() {
//   //     return {
//   //       value: current += step,
//   //       done: current > to
//   //     };
//   //   }
//   // }
//   // return {
//   //   [Symbol.iterator]: function () {
//   //     return {
//   //       next() {
//   //         return {
//   //           value: current += step,
//   //           done: current > to
//   //         };
//   //       }
//   //     }
//   //   }
//   // }
// }

// const numb = range(0, 4, 1);
// console.log(numb.next());
// console.log(numb.next());
// console.log(numb.next());
// console.log(numb.next());
// console.log(numb.next());

// for (let n of range(0, 4, 1)) {
//   console.log(n);
// }

// ! Reverse iteration over string

// String.prototype[Symbol.iterator] = function () {
//   const str = this;
//   let index = str.length;
//   return {
//     next() {
//       return {
//         value: str[--index],
//         done: index < 0,
//       }
//     }
//   };
// };

// const str = 'hello world';
// const obj = str[Symbol.iterator]();
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.dir(str[Symbol.iterator]());

// for(let l of str) {
//   console.log(l);
// }


// for(let l of 'hello world') {
//   console.log(l);
// }

// String.prototype[Symbol.iterator] = function () {
//   let index = this.length;
//   let str = this;
//   return {
//     next() {
//       return {
//         value: str[--index],
//         done: index < 0
//       };
//     }
//   }
// }

// const str = 'hello world';

// for(let l of str) {
//   console.log(l);
// }

 /**
  * ! Practice
  */
 // Deep merge
// const treeDeep = {
//   value: 'Item 0',
//   children: [
//       {
//           value: 'Item 1',
//           children: [
//               {
//                   value: 'Item 4'
//               },
//               {
//                   value: 'Item 5',
//                   children: [
//                       {
//                           value: 'Item 13'
//                       }
//                   ]
//               },
//               {
//                   value: 'Item 6',
//                   children: [
//                       {
//                           value: 'Item 14'
//                       },
//                       {
//                           value: 'Item 15'
//                       }
//                   ]
//               }
//           ]
//       },
//       {
//           value: 'Item 2',
//           children: [
//               {
//                   value: 'Item 7'
//               },
//               {
//                   value: 'Item 8'
//               },
//               {
//                   value: 'Item 9'
//               }
//           ]
//       },
//       {
//           value: 'Item 3',
//           children: [
//               {
//                   value: 'Item 10'
//               },
//               {
//                   value: 'Item 11'
//               },
//               {
//                   value: 'Item 12'
//               }
//           ]
//       }
//   ]
// }

// function deepMerge(node) {
//   if (!node.children) {
//     return node.value;
//   }
//   const list = node.children.map(leaf => {
//     // if (!leaf.children) {
//     //   return leaf.value;
//     // }
//     return deepMerge(leaf);
//   });
//   return [node.value].concat(list.flat());
// }

// const result = deepMerge(treeDeep);
// console.log(result);




// function deepMerge(node) {
//   if (!node.children) {
//     return node.value;
//   }
//   const list = node.children.map(function (leaf) {
//     return deepMerge(leaf);
//   });
//   console.log(list);

//   return [node.value].concat(list.flat());
// };

// const result = deepMerge(treeDeep);
// console.log(result);
