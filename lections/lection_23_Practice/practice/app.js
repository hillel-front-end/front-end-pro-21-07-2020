function getFormData($form) {
  const data = {};

  for(let element of $form.elements) {
    if (element.type === 'text' || element.type === 'number' || element.type === 'textarea') {
      data[element.name] = element.value;
    }
    if (element.type === 'checkbox' && element.checked) {
      if (!Array.isArray(data[element.name])) {
        data[element.name] = [];
      }
      data[element.name].push(element.value);
    }
  }

  return data;
}

function createUsers(users) {
  const fragment = document.createDocumentFragment();
  users.forEach((user, index) => {
    const $row = document.createElement('tr');
    $row.dataset.id = user.id;
    $row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
      <td>${user.languages.join(', ')}</td>
      <td>
        <button class="btn btn-light" data-action="edit">Edit</button>
        <button class="btn btn-primary" data-action="view">View</button>
        <button class="btn btn-danger" data-action="remove">Remove</button>
      </td>
    `;
    fragment.appendChild($row);
  });
  
  return fragment;
}

function populateForm($form, data = {}) {
  for (let element of $form.elements) {
    if (element.type === 'checkbox' && Array.isArray(data[element.name])) {
      element.checked = data[element.name].includes(element.value);
    } else {
      element.value = data[element.name];
    }
  }
}

const users = [
  {
    id: 'aasdfasfsafafsf',
    name: 'John',
    surname: 'White',
    age: 27,
    address: 'Ukraine, Odesa',
    languages: ['JS', 'Python'],
  },
  {
    id: 'basfdasfasfas',
    name: 'Jane',
    surname: 'Jonson',
    age: 24,
    address: 'USA, New York',
    languages: ['JS', 'PHP'],
  }
];

const $form = document.querySelector('#user-form');
const $usersTable = document.querySelector("#users-table");
const $createButton = document.querySelector('#create');

function updateTable() {
  const html = createUsers(users);
  $usersTable.innerHTML = '';
  $usersTable.appendChild(html);
}

updateTable();

$usersTable.addEventListener('click', event => {
  const userId = event.target.closest('tr').dataset.id;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return;
  }
  switch (event.target.dataset.action) {
    case 'view':
      populateForm($form, user);
      break;
    case 'edit':
      console.log('edit');
      break;
    case 'remove':
      console.log('remove');
      break;
  }
});

$createButton.addEventListener('click', () => {
  $form.classList.remove('hide');
  $form.reset();
});


$form.addEventListener('submit', event => {
  event.preventDefault();
  const user = getFormData($form);
  users.push(user);
  updateTable();
  $form.reset();
  $form.classList.add('hide');
});

// localStorage.setItem('users', JSON.stringify(users));
// localStorage.getItem('users');

const formData = getFormData($form);
console.log(formData);

// populateForm($form, users[0]);
