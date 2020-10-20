const express = require('express');
const { nanoid } = require('nanoid');
const bodyParser = require('body-parser');
const fs = require('fs');

let cities = [
  {
    id: nanoid(),
    name: 'Odesa',
  },
  {
    id: nanoid(),
    name: 'Kyiv',
  },
];

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

// Get all. GET

app.get('/api/cities', (req, res) => {
  res.json(cities);
});

// Get by id. GET

app.get('/api/cities/:id', (req, res) => {
  const id = req.params.id;
  const city = cities.find(city => city.id === id);
  if (city) {
    return res.json(city);
  }
  res.status(404);
  res.json({
    status: 404,
    message: 'City Not Found',
  });
});

// Create. POST

app.post('/api/cities', (req, res) => {
  const city = req.body;
  if (city && city.name) {
    city.id = nanoid();
    cities.push(city);

    res.json(city);
  } else {
    res.status(400);
    res.json({
      status: 400,
      message: 'Name is empty',
    });
  }
});

// Rename city. PUT

// Delete. DELETE

app.delete('/api/cities/:id', (req, res) => {
  const city = cities.find(city => city.id === req.params.id);
  if (!city) {
    res.status(404);
    res.json({
      status: 404,
      message: 'Not Found',
    });
  } else {
    cities = cities.filter(city => city.id !== req.params.id);
    res.json(city);
  }
});

app.listen(3000, () => {
  console.log('Server started at 3000');
});
