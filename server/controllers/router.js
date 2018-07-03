const express = require('express');

// Create router
const router = express.Router();

// Route handlers
const name = require('./recipeName');
const steps = require('./recipeSteps');

// GET routes
router.get('/names', name.get);
router.get('/steps/:name', steps.get);


module.exports = router;
