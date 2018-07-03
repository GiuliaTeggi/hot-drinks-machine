/* eslint-disable no-console */
const { getNames } = require('../model/queries/recipeQueries');

console.log('Recipe name reached');
exports.get = async (req, res) => {
  try {
    const names = await getNames();
    const namesArray = names.map(obj => obj.name);
    res.send(namesArray);
  } catch (err) {
    console.log('recipeName GET error', err);
  }
};
