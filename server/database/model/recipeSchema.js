const mongoose = require('mongoose');

// Create database schema of each recipe
const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Name is a required field',
    },
    steps: {
      type: Array,
      required: 'Steps is a required field',
    },
  },
  { timestamps: true },
);

// Compile schema into a model
/* eslint new-cap: ["error", { "newIsCap": false }] */
const RecipeModel = new mongoose.model('Recipe', RecipeSchema);

module.exports = { RecipeModel };
