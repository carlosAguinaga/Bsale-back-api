const { Router } = require('express');
const { getAllCategories } = require('../controllers/categories.controller');

const categoriesRouter = Router();

categoriesRouter.get('/', getAllCategories);

module.exports = { categoriesRouter };
