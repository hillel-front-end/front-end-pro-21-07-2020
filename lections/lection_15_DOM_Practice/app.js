const form = document.querySelector('#figure_form');
const container = document.querySelector('#container');
const figureSelect = document.querySelector('#figure');

container.addEventListener('click', e => {
  if (e.target.classList.contains('figure')) {
    e.target.parentNode.removeChild(e.target);
  }
});

function getFormData(form) {
  const elements = form.elements;
  const data = {};
  for (let i = 0; i < elements.length; i++) {
    const fieldSet = elements[i].closest('fieldset');
    if (fieldSet && !fieldSet.classList.contains('hide')) {
      data[elements[i].name] = elements[i].value;
    }
  }

  return data;
};

function createRectangle(width, height, color, text) {
  const figure = document.createElement('div');
  const textNode = document.createElement('span');
  textNode.textContent = text;
  figure.classList.add('figure');
  figure.style.width = `${width}px`;
  figure.style.height = `${height}px`;
  figure.style.backgroundColor = color;
  figure.appendChild(textNode);

  return  figure;
}

function createSquare(size, color, text) {
  return createRectangle(size, size, color, text);
}

function createCircle(size, color, text) {
  const circle = createSquare(size, color, text);
  circle.style.borderRadius = '50%';

  return circle;
}

figureSelect.addEventListener('change', e => {
  for (let i = 0; i < form.elements.length; i++) {
		form.reset();
    const element = form.elements[i];
    if (element.tagName !== 'FIELDSET') {
      continue;
    }
    if (element.name === e.target.value) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = getFormData(form);
  let figure;
  switch(figureSelect.value) {
    case 'square':
      figure = createSquare(data.size, data.color, data.text);
      break;
    case 'rectangle':
      figure = createRectangle(data.width, data.height, data.color, data.text);
      break;
    case 'circle':
      figure = createCircle(data.size, data.color, data.text);
      break;
    default:
      figure = null;
  }
  if (figure) {
    container.appendChild(figure);
  }
});
