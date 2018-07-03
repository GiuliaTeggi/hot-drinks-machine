const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


// Create and start server

const app = express();

const localhost = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});


// Middleware

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

// app.use(controllers);


// Routing

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));
