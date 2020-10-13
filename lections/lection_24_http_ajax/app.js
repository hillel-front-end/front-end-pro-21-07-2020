console.log('Lection 24 - HTTP. AJAX');

// const button = document.querySelector('button');
// const container = document.querySelector('#cities');
// const spinner = document.querySelector('#spinner');

// button.addEventListener('click', () => {
//   spinner.classList.remove('hide');
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '/cities.json');
//   xhr.onreadystatechange = function() {
//     // console.log(xhr.readyState);
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       spinner.classList.add('hide');
//       if (xhr.status !== 200) {
//         console.error(`${xhr.status}: ${xhr.statusText}`);
//       } else {
//         const cities = JSON.parse(xhr.responseText);
//         cities.forEach(city => {
//           const li = document.createElement('li');
//           li.innerText = city.name;
//           container.appendChild(li);
//         });
//       }
//     }
//   }
//   xhr.send();
// });

// button.addEventListener('click', () => {
//   const f = fetch('cities.jso')
//     .then(response => {
//       return response.json();
//     })
//     .then(cities => {
//       console.log(cities);
//     })
//     .catch(response => {
//       console.log(response);
//     });
// });


// button.addEventListener('click', async () => {
//   spinner.classList.remove('hide');
//   const response = await fetch('cities.json');
//   const cities = await response.json();
//   spinner.classList.add('hide');
//   cities.forEach(city => {
//     const li = document.createElement('li');
//     li.innerText = city.name;
//     container.appendChild(li);
//   });
// });


const planet = {
  climate: "Arid",
  diameter: "10465",
  gravity: "1 standard",
  name: "Tatooine",
  orbital_period: "304",
  population: "200000",
  residents: [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/",
  ],
  rotation_period: "23",
  surface_water: "1",
  terrain: "Dessert",
  url: "https://swapi.dev/api/planets/1/"
};

const headers = new Headers();
headers.set('Content-Type', 'application/json');

fetch('https://swapi.dev/api/planets/', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(planet)
})
.then(response => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
})
.catch(err => {
  console.log(err);
})

