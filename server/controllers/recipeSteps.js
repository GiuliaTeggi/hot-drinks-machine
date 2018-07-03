/* eslint-disable no-console */
const querystring = require('querystring');
const { getSteps } = require('../model/queries/recipeQueries');

exports.get = async (req, res) => {
  const { name } = req.params;

  try {
    const stepsObj = await getSteps(name);
    const stepsArray = stepsObj.steps;
    res.send(stepsArray);
  } catch (err) {
    console.log('recipeName GET error', err);
  }
};