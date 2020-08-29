console.log('Lection 11');

/**
 * Тайм коды:
 * 00:04 - Javascript в браузере
 * 00:11 - Объект window
 * - window.window - рекурсия
 * 00:17 - Таймеры. Асинхронность
 * 00:32 - location
 * 00:47 - screen
 * 00:51 - navigator
 * 01:04 - history
 * -  History API
 * 01:45 - DOM - Document Object Model
 */

// ! Javascript в браузере - 19:26

// ! Объект window - 19:33
// var globalVariable = 'value';
// window.anotherGlobalVariable = 'value 2';
// console.log(Array);
// console.log(window.Array);
// console.dir(Function);

// ! document, location, navigator, screen, history

// ! window.window - рекурсия
// console.log(window.window.Array);
// console.dir(window.window.window.window.Array); // window.window

// console.log(window.window.window.console.log);

// ! Таймеры. Асинхронность - 19:39

// * setTimeout(<callback>, <ms>);

// const handler = function () {
//   console.log('async');
// }

// setTimeout(handler, 2000);

// console.log('sync');

// setInterval(function () {
//   console.log('interval');
// }, 1000);

// let i = 0;
// setInterval(function () {
//   console.log(i++);
// }, 1000);

// const timer = setTimeout(function () {
//   console.log('timeout');
// }, 5000);

// window.onclick = function () {
//   clearTimeout(timer);
// };

// let i = 0;
// const timer = setInterval(function () {
//   console.log(i++);
// }, 1000);

// window.onclick = function () {
//   clearInterval(timer);
// };


// setTimeout(function() {
//   console.log('async');
// }, 1000);

// console.log('sync');

// * setInterval(<callback>, <ms>);

// let i = 0;

// setInterval(function() {
//   console.log(i++);
// }, 1000);

// console.log('sync');

// * clearTimeout, clearInterval

// const timer = setInterval(function () {
//   console.log('interva');
// }, 2000);

// window.onclick = function () {
//   clearInterval(timer);
// }


// ! alert, confirm, prompt - прерывают выполнение скрипта

// let i = 0;
// setInterval(function () {
//   console.log(i++);
// }, 1000);

// setTimeout(function () {
//   alert('hello world');
// }, 5000);

// ! location - 19:54

// console.log(window.location);

// window.location = 'http://google.com';

// setTimeout(() => {
//   window.open('http://google.com');
// }, 3000);

// * изменение свойст
// window.location.hash = '25';

// window.onhashchange = function () {
//   console.log(window.location.hash);
// }

// * window.location change 
// window.location = 'http://google.com';

// * Методы
// window.location.reload();

// window.location.assign('http://google.com');

// window.location.replace('https://www.google.com/maps/');

// ! screen - 20:09
// console.log(screen);
// console.log(window.screen.width, window.screen.height);
// console.log(window.screen.availWidth, window.screen.availHeight);
// console.log(window.screen.pixelDepth); // глубина цвета - кол-во бит на пиксель

// ! navigator - 20:13
// console.log(navigator); // для сбора статистики
// if (window.location !== undefined)

// ! history 20:26
// console.log(history);
// // history.back(); // переход на предыдущую страницу
// // history.forward(); // переход на следующую страницу
// // history.go(-2);
// // history.go(2);
// // * Навигация через hash
// const contentEl = window.document.getElementById('content');
// const links = {
//   'main': 'This is the <strong>main</strong> page',
//   'about': 'This is the <strong>about</strong> page',
//   'downloads': 'This is the <strong>downloads</strong> page',
// }

// var updateState = function () {
//   const hash = window.location.hash.slice(1);
//   const content = links[hash];
//   contentEl.innerHTML = content;
// }
// window.addEventListener('hashchange', updateState);
// window.addEventListener('load', updateState);

// * History API

// const contentEl = window.document.getElementById('content');
// const links = {
//   'main': 'This is the <strong>main</strong> page',
//   'about': 'This is the <strong>about</strong> page',
//   'downloads': 'This is the <strong>downloads</strong> page',
// }
// const navEl = document.querySelector('.nav');

// const updateState = function (state) {
//   if (!state) {
//     return;
//   }
//   const content = links[state.page];
//   console.log(state.page);
//   contentEl.innerHTML = content;
// }

// navEl.addEventListener('click', function (event) {
//   if (event.target.tagName !== 'A') {
//     return;
//   }
//   const href = event.target.getAttribute('href');
//   const state = {
//     page: href,
//     title: 'aa',
//   };
//   history.pushState(state, '', state.page);
//   updateState(state);
//   event.preventDefault();
// });

// window.addEventListener('popstate', function (e) {
//   // console.log(e.state);
//   updateState(e.state);
// });
// var state = {
//   page: 'about',
// };
// history.pushState(state, '', state.page);


// history.replaceState()

// ! DOM - Document Object Model - 20:57

// ? TextNode
const textNode = document.createTextNode('some text');
// console.log(textNode);
// console.dir(textNode);

const p = document.createElement('p');
p.appendChild(textNode);
const span = document.createElement('span');
p.appendChild(span);
console.log(p);
console.dir(p);

// ? Element. createElement
// const p = document.createElement('p');
// console.log(p);
// console.dir(p);
// const textNode = document.createTextNode('inner text');
// p.appendChild(textNode);
// console.log(p);

