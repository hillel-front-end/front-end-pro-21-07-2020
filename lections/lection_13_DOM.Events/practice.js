/**
 * 1. Создать блок на странице. При зажатии мыши на блоке -
 *    блок должен перемещатся за мышью до отпускания кнопки.
 */

const parent = document.querySelector('.parent');
const dragable = document.querySelector('.dragable');

let mouseDown = false;
let offset = [];
// function handler(event) {

// }

parent.addEventListener('mousedown', function(e) {
  if (e.target.classList.contains('dragable')) {
    mouseDown = true;
    offset = [
      dragable.offsetLeft - e.clientX,
      dragable.offsetTop - e.clientY,
    ];
  }
});

parent.addEventListener('mouseup', function() {
  mouseDown = false;
});

parent.addEventListener('mousemove', function (event) {
  // console.log(event);
  if (mouseDown) {
    // dragable.style.left = event.x + offset[0] + 'px';
    // dragable.style.top = event.y + offset[1] + 'px';
    let left = event.x + offset[0];
    let top = event.y + offset[1];
    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }
    if (left > parent.clientWidth - 40) {
      left = parent.clientWidth - 40;
    }
    if (top > parent.clientHeight - 40) {
      top = parent.clientHeight - 40;
    }
    dragable.style.left = left + 'px';
    dragable.style.top = top + 'px';
  }
});
