const { Router } = require('express');
const { getAllCategories } = require('../controllers/categories.controller');

const categoriesRouter = Router();


/**
 * @swagger
 * /api/v1/categories:
 *  get:
 *    summary: All categories
 *    tags: [Categories]        
 *    responses:
 *      200:
 *        description: Get all categories
 */
categoriesRouter.get('/', getAllCategories);

module.exports = { categoriesRouter };
