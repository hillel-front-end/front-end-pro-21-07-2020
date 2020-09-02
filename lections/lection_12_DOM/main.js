console.log('Lection 12');

/**
 * Тайм коды:
 * * 00:00 - Поиск элементов - 19:19
 * * 00:18 - classList - 19:37
 * * 00:26 - Styles - 19:45
 * * children. childNodes. Добавление контента
 * * 01:15-  Element size - 20:34
 */

// ! Поиск элементов - 19:19

// old
// const btn = document.getElementById('btn');
// console.log(btn);
// console.dir(btn);
// const btns = document.getElementsByClassName('btn-class');
// for (let i = 0; i < btns.length; i++) {
//   console.dir(btns[i]);
// }

// console.log(btns);
// console.dir(btns);

// new
// const btn = document.querySelector('button');
// const btn = document.querySelector('#btn');
// const btn = document.querySelector('.btn-class');
// const p = document.querySelector('.btn-class p')
// console.log(p);
// const elements = document.querySelectorAll('.btn-class');
// console.log(elements);

// console.time('getElementsByClassName');
// console.log(document.getElementsByClassName('btn-class'));
// console.timeEnd('getElementsByClassName');

// console.time('querySelectorAll');
// console.log(document.querySelectorAll('.btn-class'));
// console.timeEnd('querySelectorAll');


// ! classList - 19:37

// const btn = document.querySelector('button');
// console.log(btn);
// btn.classList.add('another-class');
// btn.classList.remove('btn-class');
// console.log(btn.classList);
// console.log(btn.classList.contains('another-class'));
// console.log(btn.classList.contains('btn-class'));
// function makeActive() {
//   btn.classList.add("btn-active");
// }
// console.log(btn.className);



// btn.classList.add('btn');
// btn.classList.replace('btn', 'dark-btn');
// console.log(btn.classList.contains('btn'));

// ! Styles - 19:45

// const btn = document.querySelector('button');
// console.log(btn.style.backgroundColor);
// const computedStyle = window.getComputedStyle(btn);
// console.log(window.getComputedStyle(btn));
// computedStyle.backgroundColor = 'green';
// console.log(computedStyle.backgroundColor);
// console.log(computedStyle.height);
// btn.style.backgroundColor = 'red';
// btn.style.display = 'block';
// btn.style.background = 'green'; 
// console.log(btn.style.cssText = btn.style.cssText + 'background: green;');
// btn.style.cssText += 'background: green;';
// console.log(btn.style.cssText);
// console.log(btn.style);
// console.log(window.getComputedStyle(btn));
// console.log(window.getComputedStyle(btn).cssText.split(';').join(';\n'));


// console.log(window.getComputedStyle(btn));


// ! children. childNodes. Добавление контента

// const div = document.querySelector('div.btn-class');
// console.log(div.childNodes); // all inner nodes
// console.log(div.children[0].children); // all inner elements
// console.dir(div);
// console.log(div.childNodes[3].childNodes[0].nodeValue);
// const item = document.createElement('li');
// const link = document.createElement('a');
// const link = document.createElement('a');
// const text = document.createTextNode('google.com');
// link.appendChild(text);
// link.setAttribute('href', 'https://google.com');
// console.log(link.attributes);
// console.log(link);

// const div = document.querySelector("div.btn-class");
// console.log(div.innerHTML);
// div.innerHTML = div.innerHTML + '<a href="https://google.com">google.com</a>';
// div.innerHTML = '<a href="https://google.com">google.com</a>';


// link.appendChild(document.createTextNode('contacts'));
// item.appendChild(link);
// nav.appendChild(item);
// console.log(link.attributes);
// link.setAttribute('href', 'contacts');
// nav.innerHTML += '<li><a href="contacts">contadts</a></li>';

// * childNodes

// const btn = document.querySelector('button');
// console.dir(btn.childNodes);

// https://learn.javascript.ru/dom-navigation


// * documentFragment

// const links = ['google.com', 'fb.com'];

// const documentFragment = document.createDocumentFragment();
// for(let i = 0; i < links.length; i++) {
//   const link = document.createElement('a');
//   const text = document.createTextNode(links[i]);
//   const br = document.createElement('br');
//   link.appendChild(text);
//   link.setAttribute('href', links[i]);
//   documentFragment.appendChild(link);
//   documentFragment.appendChild(br);
// }
// console.log(documentFragment);
// document.body.appendChild(documentFragment);



// documentFragment.innerHtml = '<p>test</p>';
// console.dir(documentFragment);


// ! Element size - 20:34

// * https://learn.javascript.ru/size-and-scroll

// const btn = document.querySelector('button');
// console.log(btn.offsetHeight);
// console.log(btn.offsetTop);



// ! Практика
/**
 * 1. Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются
 *    на случайное положение в пределах окна.
 * 2. Каждое перемещение также меняет цвет блока на случайный.
 *    Создать фунцию getRandColor()
 */
