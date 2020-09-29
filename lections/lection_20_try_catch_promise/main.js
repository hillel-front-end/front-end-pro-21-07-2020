'use strict';
console.log('Lection 20: Promise');


//  function test() {
//    this.a = 10;
//  }

//  test();
//  console.log(a);
// var lll = 10;

// ! try/catch/finally - 19:26

// // lalal = 10;
// console.log('test');
// try {
//   // lalal = 10;
//   console.log('try');
// } catch(e) {
//   // console.dir(e);
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e.stack);
// } finally {
//   console.log('finish');
// }
// console.log('test');
// * try/catch работает синхронно
// try {
//   setTimeout(() => {
//     try {
//       llalal;
//     } catch(e) {
//       console.log(e);
//     }
//   }, 0);
// } catch (e) {
//   console.log(e);
// }

// * Собственные ошибки
// const error = new Error('my error');
// console.log(error);

// function test(age) {
//   if (age > 10) {
//     const error = new Error('age should be less then 10');
//     error.age = age;
//     throw error;
//   }
//   // throw new Error('another');
//   return age * 2;
// }

// try {
//   test(11);
// } catch(e) {
//   if (e.age) {
//     const res = test(8);
//     console.log(res);
//   } else {
//     throw e;
//   }
// }

// try {
//   throw new Error('my message');
// } catch(e) {
//   console.log(e.message, e.stack, e.name);
// }

// * JSON.parse error

// const json = '{\'a\':1}';
// // const data = JSON.parse(json);
// // console.log(data);
// try {
//   const data = JSON.parse(json);
//   console.log(data);
// } catch(err) {
//   console.log(err, json);
// }

 // ! Callback problem - 19:58

// const users = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'White',
//     age: 32,
//     active: true,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 23,
//     active: true,
//   }
// ];

// function saveData(data, callback) {
//   setTimeout(() => {
//     callback({
//       status: 200,
//       data: 'data is saved',
//     });
//   }, 2000);
// }

// function getUsers(callback) {
//   setTimeout(() => {
//     callback(users);
//   }, 2000);
// }

// function updateUsers() {
//   console.log('Request data');
//   getUsers(function(response) {
//     console.log('Data is fetched: ', response);
//     const updated = response.map(user => {
//       if (user.age > 30) {
//         user.active = false;
//       }
//       return user;
//     });
//     saveData(updated, function(response) {
//       console.log('Updated data is saved: ', response);
//     });
//   });
//   // setTimeout(() => {
//   //   const updated = users.map(user => {
//   //     if (user.age > 30) {
//   //       user.active = false;
//   //     }

//   //     return user;
//   //   });
//   //   saveData(updated, function(response) {
//   //     console.log(response);
//   //   });
//   // }, 2000);
// }

// updateUsers();

// ! Promise - 20:22

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     // resolve('data');
//     reject('invalid data');
//   }, 2000);
// });

// console.log(p);

// p.then(function(result) {
//   console.log('Fulfilled: ', result);
// });

// p.catch(function(error) {
//   console.log('Rejected: ', error);
// });

// * Microtask

// console.log('start');
// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     resolve({
//       id: 1,
//       name: 'John',
//     });
//   }, 1000);
// });

// p.then(function(data) {
//   console.log('promise', data);
// });

// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// console.log('end');


// * reject

// const p = new Promise(function(resolve, reject) {
//   reject('error');
// });

// p.then(
//   function(data) {
//     console.log('data');
//   }, function(error) {
//     console.error(error);
//   }
// );
// p.then(function(data) {
//     console.log('data');
// }).catch(function(error) {
//   console.error(error);
// });


// * catch

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     const a = '{"a": 1}';
//     try {
//       const data = JSON.parse(a);
//       resolve(data);
//     } catch(e) {
//         reject(e);
//     }
//   }, 1000);
// });

// function getData() {
//   const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       const a = '{"a: 1}';
//       try {
//         const data = JSON.parse(a);
//         resolve(data);
//       } catch(e) {
//           reject(e);
//       }
//     }, 1000);
//   });

//   return p;
// }

// getData().then(function(data) {
//   console.log('data', data);
// }).catch(function(err) {
//   console.log(err.message);
// });

// * status can't be changed

// const p = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('data');
//   }, 1000);
//   setTimeout(function() {
//     resolve('second data');
//   }, 3000);
// });

// p.then(function(data) {
//   console.log(data);
// });

// *



// function saveData(data) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         status: 200,
//         data: 'data is saved',
//       });
//     }, 2000);
//   });
// }

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

// const error = new Error('invalid');
// console.log(error.message);
// class CustomError extends Error {
//   constructor(message, data) {
//     super(message);
//     this.data = data;
//   }
// }
// const customError = new CustomError('my custom message', {
//   name: 'JOhnb',
//   id: 2,
// });
// console.log(customError.data);

// try {
//   throw new CustomError('msg', 'some data');
// } catch(e) {
//   if (e.data) {
//     console.log(e.data);
//   } else {
//     throw e;
//   }
// }

// getUsers(function(users) {
//   console.log(users);
// });

function setUsersStatus(users) {
  const updatedUsers =  users.map(user => {
    if (user.age > 30) {
      user.active = false;
    }
    return user;
  });

  return updatedUsers;
}

getUsers()
// .then(users => {
//   console.log('Fetched: ', users);
//   // const updated = users.map(user => {
//   //   if (user.age > 30) {
//   //     user.active = false;
//   //   }
//   //   return user;
//   // });
//   // saveData(updated, function(response) {
//   //   console.log('Response: ', response);
//   // });
//   const updated = setUsersStatus(users);
//   return saveData(updated);
// })
.then(users => {
  console.log('Fetched: ', users);
  return setUsersStatus(users);
})
.then(updateUsers => {
  return saveData(updateUsers);
})
.then(response => {
  console.log(response);
});
