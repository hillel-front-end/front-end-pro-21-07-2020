/**
 * 1. Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются
 *    на случайное положение в пределах окна.
 */

var containerElem = document.querySelector('.container');

function getRandomPosition(maxWidth, maxHeight) {
  return {
    x: Math.floor(Math.random() * maxWidth),
    y: Math.floor(Math.random() * maxHeight),
  };
}

function getRandColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const t = Math.random();
  return `rgba(${r}, ${b}, ${g}, ${t})`;
}

function getRandomSize(min, max) {
  return {
    width: Math.max(Math.floor(Math.random() * max), min),
    height: Math.max(Math.floor(Math.random() * max), min),
  }
};

function randomizeBlocksPosition(element) {
  for (let i = 0; i < element.children.length; i++) {
    const item = element.children[i];
    // Generate random color
    item.style.backgroundColor = getRandColor();
    // Generate random size
    const size = getRandomSize(20, 75);
    item.style.height = size.height + 'px';
    item.style.width = size.width + 'px';

    const maxHeight = element.clientHeight - item.offsetHeight;
    const maxWidth = element.clientWidth - item.offsetWidth;
    // Generate random position
    const coords = getRandomPosition(maxWidth, maxHeight);
    item.style.left = coords.x + 'px';
    item.style.top = coords.y + 'px';
  }
}

setInterval(function () {
  randomizeBlocksPosition(containerElem);
}, 1000);


const firstChild = containerElem.children[0];
firstChild.style.left = '150px';
firstChild.style.top = '250px';

function getRandomPosition(maxWidth, maxHeight) {
  return {
    x: Math.floor(Math.random() * maxWidth),
    y: Math.floor(Math.random() * maxHeight),
  };
}
function randomizeBlocksPosition(parent) {
  const height = parent.offsetHeight;
  const width = parent.offsetWidth;
  for (let i = 0; i < parent.children.length; i++) {
    const randomPositiion = getRandomPosition(width, height);
    console.log(parent.children[i].style);
    parent.children[i].style.left = randomPositiion.x + 'px';
    parent.children[i].style.top = randomPositiion.y + 'px';
  }
}

randomizeBlocksPosition(document.querySelector('.container'));
setInterval(() => randomizeBlocksPosition(document.querySelector('.container')), 2000);
