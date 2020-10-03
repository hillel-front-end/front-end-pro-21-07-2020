console.log('Lection 21 - Promise. Generators. Async/await');

/**
 * Включить запись
 */

// ! Promise

// const delay = new Promise(( resolve, reject ) => {
//   setTimeout(() => {
//     // resolve('some value');
//     reject(new Error('some message'));
//   }, 1000);
// });

// delay.then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.log(error);
// });




// ! Promisify - 19:29

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// console.log('before sleep');
// sleep(2000)
// .then(() => {
//   console.log('after sleep');
// })
// .then(() => {
//   return sleep(1000);
// })
// .then(() => {
//   console.log('after 1s');
// });


// ! Promise.all - 19:35

// function getUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: 'John',
//       });
//     }, 2000);
//   });
// }

// function getGood() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: 2,
//           name: 'Juice',
//         }
//       ]);
//     }, 3000);
//   });
// }

// function getCartData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//           id: 3,
//           good: [2],
//         });
//     }, 1000);
//   });
// }

// function rejectDelay(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('time is out');
//     }, time);
//   });
// }

// Promise.all([
//   getUser(),
//   getGood(),
//   getCartData(),
//   rejectDelay(1000),
//   1000,
// ]).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// function rejected() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(), 1000);
//  });
// }

// Promise.all([sleep(1000), sleep(5000)]).then(() => {
//   console.log('done');
// });

// * Promise.all - reject

// Promise.all([sleep(500), sleep(5000), rejected()]).then(() => {
//   console.log('done');
// }).catch(() => {
//   console.log('error');
// });

// * Promise.race - 19:46

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// function rejected(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(), time);
//  });
// }

// Promise.race([sleep(1000), sleep(5000), rejected(500)])
// .then(() => {
//   console.log('done');
// }).catch(() => {
//   console.log('error');
// });

// Promise.race([sleep(500), rejected()]).then(() => {
//   console.log('done');
// }).catch(() => {
//   console.log('error');
// });

// * Promise.allSetted - 19:50

// Promise.allSettled([sleep(1500), rejected(2000)]).then(data => {
//   console.log(data);
// });

// * Promise.resolve, Promise.reject

// const p = Promise.resolve('some value');

// const p = new Promise(resolve => {
//   resolve('some value');
// });

// p.then(data => console.log(data));
// const p = Promise.reject('some error');
// p.catch(error => console.log(error));

// ! Promise chain - 19:55

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// function rejected(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(), time);
//  });
// }

// sleep(1000).then(() => {
//   console.log('1');
//   // return 10;
//   // return Promise.resolve(10);
//   return Promise.reject('error');
// })
// .catch(error => {
//   console.log(error);
//   return Promise.resolve(undefined);
// })
// .then(() => {
//   console.log('2');
//   // return sleep(2000);
//   // return rejected(2000);
//   return JSON.parse('{a: 1}');
// })
// .then(() => {
//   console.log('3');
//   return {
//     a: 1,
//   };
// })
// .catch(error => {
//   console.log('second error handler', error);
// });


// ! Promise задачки (tasks.js)


// ! Generators - 20:31

// function* generator() {
//   console.log('hello');
//   yield;
//   console.log('world');
// }

// const obj = {
//   *range() {

//   }
// }

// const g = generator();
// g.next();
// g.next();
// console.log(g);

// console.log(g);

// * Return/receive values - 20:39

// function* range(start = 0, end = 10) {
//   for (let i = start; i < end; i++) {
//     yield i;
//   }
// }

// const r = range(0, 100);
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());

// for (let num of range(0, 10)) {
//   console.log(num);
// }

// console.log([...r]);

// function* range(start = 0, end = 10) {
//   for (let i = 0; i < end; i++) {
//     const value = yield i;
//     if (value !== undefined) {
//       i = value;
//     }
//   }
// }

// const r = range();
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next(8));
// console.log(r.next());
// console.log(r.next());

// ***
// function* generator() {
//   const person = {
//     name: 'John',
//   };
//   yield person;
//   console.log('From generator: ', person);
// }

// const g = generator();
// const p = g.next().value;
// console.log(p);
// p.name = 'Jane';
// g.next();

// ! Async/await - 20:51

function fetchUsers() {
  return new Promise(resolve => {
    resolve([
      {
        name: 'John',
        age: 25,
        active: true,
      },
      {
        name: 'Jane',
        age: 25,
        active: false,
      },
    ]);
  });
}

// function delay(time) {
//   return new Promise(resolve =>
//     setTimeout(resolve, time));
// }

// function foo() {
//   return 1000;
// }

// async function getUsers() {
//   // const users = fetchUsers();
//   // console.log(users);
//   const users = await fetchUsers();
//   await delay(2000);
//   const num = await 100;
//   const n = await foo();
//   console.log(users, num, n);
//   return users;
//   const users = await fetchUsers();
//   return users;
// }

// const result = getUsers();
// // console.log(result);
// users.then(collection => console.log(collection));











// users.then(collection => {
//   console.log(collection);
// });



// async function getUsers() {
//   console.log('start');
//   await delay(5000);
//   console.log('continue');
//   const users = await fetchUsers();
//   return users;
// }

// getUsers();

// function delay(time) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// }

// * Error handling - 21:06

function delayReject(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Time is out');
    }, time);
  });
}

function parseJson() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        a: 1,
      });
      // try {
      //   JSON.parse('{a: 1}');
      // } catch(e) {
      //   reject('Invalid JSON');
      // }
    }, 2000);
  })
}

async function getUsers() {
  try {
    const data = await parseJson();
    return data;
  } catch(e) {
    console.log(e);
    return {};
  }
  // console.log(data);
  // const users = await fetchUsers();
  // console.log(users);
  // try {
  //   const error = await delayReject(3000);
  // } catch(e) {
  //   console.log(e);
  // }
  // try {
  //   const error = await delayReject(3000);
  // } catch(e) {
  //   console.log(e);
  //   // throw e;
  // }
}

getUsers().then(value => {
  console.log(value);
});
// .catch(e => console.log(e));

// * Rewrite prev task by async/await


// function getUsers() {
//   const users = [
//     {
//       id: 1,
//       name: 'John',
//       surname: 'White',
//       age: 32,
//       active: true,
//     },
//     {
//       id: 2,
//       name: 'Jane',
//       surname: 'Jonson',
//       age: 23,
//       active: true,
//     }
//   ];

//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(users);
//     }, 2000);
//   });
// }

async function getUsers() {
  return [
    {
      id: 1,
      name: 'John',
      surname: 'White',
      age: 32,
      active: true,
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Jonson',
      age: 23,
      active: true,
    }
  ];
}

function setUsersStatus(users) {
  const updatedUsers =  users.map(user => {
    if (user.age > 30) {
      user.active = false;
    }
    return user;
  });

  return updatedUsers;
}

function saveData(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: 'data is saved',
      });
    }, 2000);
  });
}


























async function updatedUsers() {
  const users = await getUsers();
  console.log(users);
  const updatedUsers = setUsersStatus(users);
  console.log(updatedUsers);
  // const response = await saveData(updatedUsers);
  // return response;
  return await saveData(updatedUsers);
}

updatedUsers().then(response => console.log(response));

/**
 * ! Practice
 * 
 * 1. Написать промис, который будет сохраняет введение с клавиатуры чисел в поле input.
 *    После каждого ввода происходит очистка значения.
 *    Ввод значения - ввести с клавиатуры текст и нажать Enter.
 *    Закончить запрос чисел необходимо тогда, когда закончится время или будет введён специальный символ окончания ввода - '&'.
 *    Время - 10 сек. После этого - выполнить операцию, которая выведет массив в консоль.
 * 2. После нажатия на Enter - input очищается и дизейблится на 1 сек.
 */
