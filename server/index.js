const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { dbConnection } = require('./database/dbconnection');
const controllers = require('./controllers');


// Create and start server
const app = express();
const localhost = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://${localhost}:${port}`);
});


// Connect to database
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log(`${db.states[db.readyState]} to mongoDB on ${db.host}:${db.port}`);
});


// Middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(controllers);


// Routing
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));
