const $container = document.querySelector('#container');
const $form = document.querySelector('#create-form');

let cities = [];

function renderCities($container, cities = []) {
  $container.innerHTML = '';
  for (const city of cities) {
    const $row = document.createElement('tr');
    $row.innerHTML = `
      <td>${city.name}</td>
      <td>
        <button
          class="btn btn-primary"
          data-action="edit"
          data-id="${city.id}">
          Edit
        </button>
        <button
          class="btn btn-danger"
          data-action="remove"
          data-id="${city.id}">
          Remove
        </button>
      </td>
    `;
    $container.appendChild($row);
  }
}

$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  if (name.length === 0) {
    return;
  }
  const city = {
    name,
  };
  const createdCity = await createCity(city);
  cities.push(createdCity);
  renderCities($container, cities);
  $form.reset();
});

$container.addEventListener('click', async event => {
  const id = event.target.dataset.id;
  if (!id) {
    return;
  }
  switch(event.target.dataset.action) {
    case 'edit':
      const name = prompt('Please, enter new name', '');
      if (name.length !== 0) {
        cities = cities.map(city => city.id === id ? {
          id: city.id,
          name,
        } : city);
        renderCities($container, cities);
      }
      break;
    case 'remove':
      if (confirm('Are you sure?')) {
        const deleted = await removeCity(id);
        cities = cities.filter(city => city.id !== deleted.id);
        renderCities($container, cities);
      }
      break;
  }
});

// renderCities($container, cities);

async function getCities() {
  const response = await fetch('/api/cities');
  const cities = await response.json();

  return cities;
}

async function createCity(city) {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const response = await fetch('/api/cities', {
    method: 'POST',
    body: JSON.stringify(city),
    headers,
  });
  const createdCity = await response.json();

  return createdCity;
}

async function removeCity(id) {
  const response = await fetch(`/api/cities/${id}`, {
    method: 'DELETE',
  });
  const city = await response.json();

  return city;
}

getCities()
  .then(fetchedCities => {
    cities = fetchedCities;
    renderCities($container, cities);
  });
