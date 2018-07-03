const mongoose = require('mongoose');
require('dotenv').config();

let { DATABASE_URL } = process.env;

// Use test database when running tests
if (process.env.NODE_ENV === 'test') DATABASE_URL = process.env.TEST_DATABASE_URL;

// Throw error if there's no database url
if (!DATABASE_URL) throw new Error('Environment variable DATABASE_URL is not set');

// Export the connection
module.exports = {
  dbConnection: async () => mongoose.connect(DATABASE_URL),
};
