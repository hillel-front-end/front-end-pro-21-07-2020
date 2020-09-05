console.log('Lection 13');

/**
 * Тайм коды:
 * 00:02 - Events - 19:24
 *   -   - Добавление обработчиков событий
 * 00:20 - EventTarget - 19:42
 *   -   - Всплытие событий
 *   -   - Погружение событий (Перехват)
 * 00:52 - Делегирование событий - 20:14
 * 01:05 - Пользовательские события - 20:27
 *   -   - onLoad событие
 * 01:19 - onScroll - 20:41
 * 01:23 - Event.preventDefault(); - 20:45
 */

// ! Events - 19:24

// ? Добавление обработчиков событий
// function handler(target, color) {
//   console.log(arguments);
//   console.log('clicked');
//   console.log(target);
//   target.style.backgroundColor = color;
// }


// function handler() {
//   console.log(this);
// }
// const btn = document.querySelector('button');
// // btn.onclick = function () {
// //   console.log('click');
// //   console.log(this);
// //   this.style.backgroundColor = 'green';
// // };
// btn.onclick = handler;
// btn.onclick = function () {
//   console.log('another');
// };

// const btn2 = document.querySelector('#btn');
// btn2.onclick = handler;

// btn.onclick = function (event) {
//   console.log(event);
//   console.log(this);
// }

// const input = document.querySelector('input');
// input.onkeyup = function () {
//   console.log('keyup');
//   // console.log(this.value);
// };
// input.onkeydown = function () {
//   // console.log('keydown');
//   console.log(this.value);
// };
// input.onkeyup = function () {
//   // console.log('keydown');
//   console.log(this.value);
// };
// input.onchange = function () {
//   console.log(this.value);
// };

// ? EventTarget - 19:42

const input = document.querySelector('input');
// console.dir(input);
// input.addEventListener('keyup', function() {
//   console.log(this.value);
// });

// function handler() {
//   console.log('1: ', this.value);
// }
// function handler2() {
//   console.log('2: ', this.value);
// }
// input.addEventListener('keyup', handler);
// input.addEventListener('keyup', handler2);

// input.removeEventListener('keyup', handler);

// input.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// input.removeEventListener('keyup', function () {
//   console.log('keyup');
// });

// function handler() {
//   const value = this.value;
//   if (value.length > 4) {
//     this.removeEventListener('keyup', handler);
//   }
//   console.log(value);
// }

// input.addEventListener('keyup', handler);

// function handler2() {
//   console.log('2: ', this.value);
// }
// input.addEventListener('keyup', handler);
// input.addEventListener('keyup', handler2);
// input.removeEventListener('keyup', handler2);

// ? Всплытие событий

// const p = document.querySelector('p');

// p.addEventListener('click', function(event) {
  // console.log('click');
  // console.log(event);
  // console.log(event.currentTarget);
  // console.log(event.target);
  // console.log(this);
  // console.log(event.currentTarget);
  // console.log(event.target);
// });
// const btn = document.querySelector('button');
// p.addEventListener('click', function () {
//   console.log('p');
// })

// btn.addEventListener('click', function (event) {
//   console.log('btn clicked');
//   event.stopPropagation();
//   event.stopImmediatePropagation();
// });

// btn.addEventListener('click', function (e) {
//   console.log(e);
// });


// ? Погружение событий (Перехват)

// Погружение -> Цель -> Всплытие

// * stopPropagation()
// document.addEventListener('click', function(event) {
//   console.log('document');
//   event.stopPropagation();
// }, true);

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   console.log('button');
// });

// const p = document.addEventListener('click' ,function () {
//   console.log('p');
// });



// ? Делегирование событий - 20:14

// const table = document.querySelector('table');
// table.addEventListener('click', function(event) {
//   // if (event.target.tagName === 'TD') {
//   //   console.log(event.target);
//   // }
//   // console.log(event.target.closest('td'));
//   if (event.target.closest('td').tagName === 'TD') {
//     console.log(event.target);
//   }
//   // console.log(event.target);
//   // console.log(event.target.closest('td'));
// });

// ? Пользовательские события - 20:27

// var btn = document.querySelector('button');
// btn.addEventListener('my-event', function (event) {
//   console.log('fired');
//   console.log(event);
// });

// var customEvent = new CustomEvent('my-event', {
//   detail: {
//     a: 1,
//   },
// });
// btn.addEventListener('click', function (e) {
//   console.log(e);
// });

// const clickEvent = new Event('click');


// btn.dispatchEvent(customEvent);
// btn.dispatchEvent(new CustomEvent('my-event', {
//   bubbles: false,
//   detail: {
//     a: 1,
//   },
// }));

// console.dir(EventTarget);
// const source = new EventTarget();
// source.addEventListener('click', function(event) {
//   console.log(event);
// });
// source.dispatchEvent(new Event('click'));
// console.dir(new EventTarget());

// ? onLoad событие

// const button = document.querySelector('button');
// console.log(button);

// window.onload = function () {
//   console.log(document.querySelector('button'));
// };


// ? onScroll - 20:41

// window.addEventListener('scroll', (e) => {
//   console.log(e);
//   console.log(window.scrollY);
//   console.log(window.scrollX);
// });

// ? Event.preventDefault(); - 20:45

// const a = document.querySelector('a');

// a.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.href);
// });



// ! Практика
/**
 * 1. Создать блок на странице. При зажатии мыши на блоке -
 *    блок должен перемещатся за мышью до отпускания кнопки.
 */
