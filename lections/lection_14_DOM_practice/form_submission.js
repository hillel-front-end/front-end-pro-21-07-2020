/**
 * 1. Форма для регистрации:
 *    Поля:
 *      Имя, Фамилия (Текстовые поля)
 *      Дата рождения (Текстовое поле)
 *      Пол (radio)
 *      Город (select)
 *      Адрес (textarea)
 *      Языки, которыми владеет (checkbox)
 *      Кнопку "Сохранить"
 *      По нажатию на кнопку, вместо формы должна выводиться "таблица"
 *      с данными, которые ввел пользователь.
 */

function getFormData($form) {
  const data = {};
  for (let i = 0; i < $form.elements.length; i++) {
    const $element = $form.elements[i];
    const name = $element.name;
    if ($element.type === 'radio' && $element.checked) {
      data[name] = $element.value;
    }
    if ($element.type === 'checkbox' && $element.checked) {
      if (data[name] === undefined) {
        data[name] = [];
      }
      data[name].push($element.value);
    }
    if ($element.type !== 'radio' && $element.type !== 'checkbox' && $element.type !== 'submit') {
      data[name] = $element.value;
    }
  }

  return data;
}

const $form = document.querySelector('form');

// function renderTable(data) {
//   const keys = [];
//   for (let key in data) {
//     if (data.hasOwnProperty(key)) {
//       keys.push(key);
//     }
//   }
//   const table = document.createElement('table');
//   const headerRow = document.createElement('tr');
//   const bodyRow = document.createElement('tr');

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     const cell = document.createElement('th');
//     cell.textContent = key;
//     headerRow.appendChild(cell);
//     const valueCell = document.createElement('td');
//     if (Array.isArray(data[key])) {
//       valueCell.textContent = data[key].join(', ');
//     } else {
//       valueCell.textContent = data[key];
//     }
//     bodyRow.appendChild(valueCell);
//   }

//   table.appendChild(headerRow);
//   table.appendChild(bodyRow);

//   return table;
// }

function firstToUpper(str) {
  // let result = '';
  // for (let i = 0; i < str.length; i++) {
  //   if (i === 0) {
  //     result += str[i].toUpperCase();
  //   } else {
  //     result += str[i];
  //   }
  // }

  // return str;
  // return str[0].toUpperCase() + str.slice(1);
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function renderVerticalTable(data) {
  const $table = document.createElement('table');
  for(let key in data) {
    if (data.hasOwnProperty(key)) {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      const valueCell = document.createElement('td');
      const $strong = document.createElement('strong');
      $strong.textContent = firstToUpper(key);
      titleCell.appendChild($strong);
      if (Array.isArray(data[key])) {
        valueCell.textContent = data[key].join(', ');
      } else {
        valueCell.textContent = data[key];
      }
      row.appendChild(titleCell);
      row.appendChild(valueCell);
      $table.appendChild(row);
    }
  }

  return $table;
}

$form.addEventListener('submit', function(event) {
  event.preventDefault();
  const data = getFormData($form);
  const table = renderVerticalTable(data);
  $form.replaceWith(table);
});
