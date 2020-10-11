// Функция генирирущая уникальную строчку. Используется для id пользователя
const generateId = (t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};

/**
 * Получение данных с формы
 * @param {HTMLFormElement} $form 
 */
function getFormData($form) {
  const data = {};
  for (let element of $form.elements) {
    if (element.type === 'checkbox') {
      if (!Array.isArray(data[element.name])) {
        data[element.name] = [];
      }
      if (element.checked) {
        data[element.name].push(element.value);
      }
    }
    if (element.type === 'textarea' || element.type === 'number' || element.type === 'text') {
      data[element.name] = element.value;
    }
  }

  return data;
}

/**
 * Заполняет форму данными
 * @param {HTMLFormElement} $form 
 * @param {Objectj} data 
 */
function populateForm($form, data) {
  $form.dataset.id = data.id;
  for (let element of $form.elements) {
    const name = element.name;
    if (data[name] === undefined) {
      continue;
    }
    if (element.type === 'checkbox' && Array.isArray(data[name])) {
      element.checked = data[name].includes(element.value);
    }
    if (element.type === 'textarea' || element.type === 'number' || element.type === 'text') {
      element.value = data[element.name];
    }
  }
}

/**
 * Изменяет disabled аттрибут элементам формы
 * @param {HTMLFormElement} $form 
 * @param {boolean} status 
 */
function disableForm($form, status) {
  for (let element of $form.elements) {
    element.disabled = status;
  }
}

/**
 * Создает фрагмент пользователей для вставки в таблицу
 * @param {Array} users 
 */
function generateUsers(users = []) {
  const $fragment = document.createDocumentFragment();
  users.forEach((user, index) => {
    const $row = document.createElement('tr');
    $row.dataset.id = user.id;
    $row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
      <td>${user.languages.join()}</td>
      <td>
        <button class="btn btn-light" data-action="edit">Edit</button>
        <button class="btn btn-primary" data-action="view">View</button>
        <button class="btn btn-danger" data-action="remove">Remove</button>
      </td>
    `;
    $fragment.appendChild($row);
  });
  return $fragment;
}

/**
 * Класс для работы с пользователями + сохранение в localStorage
 */
class UsersRepository {

  // Ключ для работы с localStorage
  static STORAGE_KEY = 'users';

  // Берем пользователей из localStorage и добавляем в приватное свойство. 
  constructor() {
    const raw = localStorage.getItem(UsersRepository.STORAGE_KEY);
    this._users = JSON.parse(raw) || [];
    this._listeners = new Set();
  }

  /**
   * Добавляет пользователя
   * @param {Object} user 
   */
  addUser(user) {
    this._users.push(user);
    this._save();
    this._emit();
  }

  /**
   * Изменяет пользователя
   * @param {Object} updated 
   */
  updateUser(updated) {
    this._users = this._users.map(user => user.id === updated.id ? updated : user);
    this._save();
    this._emit();
  }

  /**
   * Поиск пользователя по id
   * @param {string} id 
   * @returns {Object|undefined}
   */
  findUser(id) {
    return this._users.find(user => user.id === id);
  }

  /**
   * Удаляет пользователя по id
   * @param {string} id 
   */
  removeUser(id) {
    this._users = this._users.filter(user => user.id !== id);
    this._save();
    this._emit();
  }

  /**
   * Возвращает всех пользователей
   * @returns {Array}
   */
  getUsers() {
    return this._users;
  }

  /**
   * Добавляет функцию-коллбэк, которая будет вызвана при изменении массива users.
   * @param {Function} func 
   */
  addListener(func) {
    this._listeners.add(func);
  }

  /**
   * 
   * Удаляет функцию-коллбэк.
   * @param {Function} func 
   */
  removeListener(func) {
    this._listeners.delete(func);
  }

  /**
   * Приватный метод. Сохраняет пользователей в localStorage
   */
  _save() {
    const json = JSON.stringify(this._users);
    localStorage.setItem(UsersRepository.STORAGE_KEY, json);
  }

  /**
   * Вызывает все добавленные функции-коллбэк.
   */
  _emit() {
    for (let func of this._listeners) {
      func(this._users);
    }
  }
}

// Создаем экземпляр класса. 
const repository = new UsersRepository();

// Сохраняем элемент формы.
const $form = document.querySelector('#user-form');
// Таблица, в которую будем отображать пользователей
const $userTable = document.querySelector('#users-table');

/**
 * Вызов функции заново отобразит пользователей.
 * @param {Array} users 
 */
const renderHandler = (users) => {
  $userTable.innerHTML = '';
  $userTable.appendChild(generateUsers(users));
}

// При запуске приложения отображаем пользователей из localStorage
renderHandler(repository.getUsers());
// Заново отображаем пользователей при каждом изменении
repository.addListener(renderHandler);

// Обработчик submit события формы
$form.addEventListener('submit', e => {
  e.preventDefault();
  // Получаем данные из формы
  const user = getFormData(e.target);
  // Если у формы установлен data-id (id пользователя)
  if (e.target.dataset.id !== 'undefined') {
    // Обновляем пользователя
    repository.updateUser({
      ...user,
      id: e.target.dataset.id,
    });
  } else {
    // Иначе создаем
    user.id = generateId();
    repository.addUser(user);
  }
  // Скрываем форму
  $form.classList.add('hide');
});

// Обработчик click'а кнопок Edit, View, Remove
$userTable.addEventListener('click', e => {
  // Если клик был за пределами tr
  if (!e.target.closest('tr')) {
    return;
  }
  // Ищем пользователя по id. Id - берется из data-id tr элемента
  const user = repository.findUser(e.target.closest('tr').dataset.id);
  // Если не нашли пользователя - выходим из функции.
  if (!user) {
    return;
  }
  // Скрываем форму
  $form.classList.add('hide');
  switch (e.target.dataset.action) {
    // Обрбатываем кнопку View
    case 'view':
      // Заполняем форму данными пользователя
      populateForm($form, user);
      // Делаем форму нередактируемой. 
      disableForm($form, true);
      // Отображаем форму
      $form.classList.remove('hide');
      break;
    // Обработчик кнопки Edit
    case 'edit':
      // Заполняем форму данными пользователя
      populateForm($form, user);
      // Делаем форму редактируемой. 
      disableForm($form, false);
      // Отображаем форму
      $form.classList.remove('hide');
      break;
    case 'remove':
      // Подтверждаем удаление
      if (confirm('Are you sure?')) {
        // Удаляем пользователя по id
        repository.removeUser(user.id);
      }
      break;
  }
});

// Обработчик кнопки Create. Нужна для создания пользователя
document.querySelector('#create').addEventListener('click', () => {
  // Чистим форму от данных
  $form.reset();
  $form.dataset.id = undefined;
  // Отображаем форму
  $form.classList.remove('hide');
});
