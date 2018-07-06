/* eslint-disable no-console */
const { getSteps } = require('../model/queries/recipeQueries');

exports.get = async (req, res) => {
  const { name } = req.params;
  console.log('Req', req);
  try {
    const stepsObj = await getSteps(name);
    const stepsArray = stepsObj.steps;
    res.send(stepsArray);
  } catch (err) {
    console.log('recipeName GET error', err);
  }
};
