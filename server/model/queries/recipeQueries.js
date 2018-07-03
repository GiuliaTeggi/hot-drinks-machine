const { Recipe } = require('../database/recipeSchema');

// Find names of recipes without returning _id
const getNames = async () => Recipe.find().select('name -_id');

// Find steps of selected recipe
const getSteps = async name => Recipe.findOne({ name }).select('steps');

module.exports = { getNames, getSteps };
