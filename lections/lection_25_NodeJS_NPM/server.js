// ! Lection 25 NodeJS Basic

// console.log('Helo from NodeJS');

// ! NO window here
// console.log(window);
// console.log(global);

// setTimeout(() => {
//   console.log('timeout')
// }, 100);

// const person = {
//   name: 'John',
//   age: 25,
// };

// console.log(person);

// const arr = [1, 2, 3, 4, 5, 6];

// for (let num of arr) {
//   console.log(num);
// }

// async function test() {
//   return await 1;
// }
// test().then(result => {
//   console.log(result);
// });

// console.log(document);

// .etc


// var person = {
//   name: 'John',
//   age: 25,
// };

// global.myVAr = 'aaa';
// console.log(global.person); // undefined
// console.log(person);


// ! Modules

// * CommonJS

// console.log(module);

// const person = {
//   name: 'John',
//   age: 25,
// };

// console.log(global.person);


// console.log(module);

// const logger = require('./logger');
// logger.log('some message');
// const log = require('./logger').log;
// log('some message');
// const { log } = require('./logger');
// log('some message');

// ! Path module
// const logger = require('./logger');
// console.log(__filename);
// console.log(__dirname);
const path = require('path');
// const currentFilePath = path.parse(__filename);
// console.log(currentFilePath);

// console.log(__dirname);
// const filename = 'server.js';
// console.log(path.join(__dirname, filename));
// console.log(path.join('/root', 'www', filename))
// console.log(path.delimiter);
// console.log(path.dirname(__filename));
// console.log(path.join(__filename))

// ! Events. Event Emmiter

// const EventEmmiter = require('events');
// const { emit } = require('process');

// const emmiter = new EventEmmiter();

// $element.addEventListener('click', (event) => ...)
// // Register listener
// emmiter.on('request', message => {
//   console.log(message);
// });

// // // Make request
// emmiter.emit('request', 'send me "style.css" file');
// emmiter.emit('request', 'give my app.js');
// emmiter.emit('request', 'send me "style.css" file');

// emmiter.on('myEvent', data => {
//   console.log(data);
// });
// emmiter.once('myEvent', data => {
//   console.log('Second: ', data);
// })

// emmiter.emit('myEvent', {
//   a: 1
// });
// emmiter.emit('myEvent', {
//   a: 1
// });

// ! HTTP module

// * Make request
// const http = require('http');
// http.get('http://www.google.com', response => {
//   let data = '';
//   response.on('data', chunk => {
//     console.log('onData: ', chunk.toString());
//     console.log('--------');
//     data += chunk;
//   });
//   response.on('end', () => {
//     console.log(data);
//     console.log(response.statusCode);
//     console.log(response.headers);
//   });
// });


// * Server

// const http = require('http'); 
// const server = http.createServer();

// server.on('request', (request, response) => {
//   console.log(request.method);
//   console.log(request.url);
//   response.write('Hello from NodeJS server');
//   response.end();
// });

// server.on('connection', (socket) => {
//   console.log(socket);
// });

// server.listen(3000, function () {
//   console.log('Server is running and listens 3000 port');
// });

// console.log(server);
// // server.on('connection', socket => {
// //   console.log(socket);
// // });

// server.on('request', (request, response) => {
//   // console.log(request.method);
//   // if (request.url === '/') {
//   //   response.write('Root path');
//   // } else {
//   //   response.write('Another paths');
//   // }
//   // response.write('Hello from NodeJS');
//   // response.end();
//   // * Send 404
//   response.writeHead(404);
//   response.end();
// });

// server.listen(3001, function () {
//   console.log('Server is started at 3000');
// });

// ! Express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express');
});

// app.get('/users.json', (req, res) => {
//   const users = [
//     {
//       id: 1,
//       name: 'John',
//     },
//   ];
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify(users));
// })

app.listen(3000, () => {
  console.log('Server is started on 3000');
});

// // * Server static files
// // https://expressjs.com/en/starter/static-files.html

// app.use(express.static('public'));
