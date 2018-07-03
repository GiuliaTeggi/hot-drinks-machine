/* eslint-disable no-console */
const mongoose = require('mongoose');
const dbconnection = require('../dbconnection/dbconnection');
const { Recipe } = require('../recipeSchema');
const recipes = require('./recipes.json');

// IIFE to populate database with recipes
(() => {
  Recipe
    .insertMany(recipes, (err, addedRecipes) => {
      if (err) console.log('Populate database error:', err);
      else console.log('Recipes added to database:', addedRecipes);
    });
})();
