const { Router } = require('express');
const {
  getAllProducts,
  getOneProduct,
} = require('../controllers/products.controller');
const productsRouter = Router();

/**
 * @swagger
 * /api/v1/products:
 *  get:
 *    summary: All products
 *    tags: [Products]         
 *    responses:
 *      200:
 *        description: Get all products
 */

/**
 * @swagger
 * /api/v1/products?search={word}:
 *  get:
 *    summary: Products by search
 *    tags: [Products]
 *    parameters:
 *      - in: query
 *        name: search
 *        required: true
 *        schema:
 *          type: string
 *        description: Search keyword       
 *    responses:
 *      200:
 *        description: Get products by search
 */  

/**
 * @swagger
 * /api/v1/products?category={id}:
 *  get:
 *    summary: Products by category
 *    tags: [Products]
 *    parameters:
 *      - in: query
 *        name: category
 *        required: true
 *        schema:
 *          type: integer
 *        description: id of category           
 *    responses:
 *      200:
 *        description: Get products by category
 */
productsRouter.get('/', getAllProducts);

/**
 * @swagger
 * /api/v1/products/{id}:
 *  get:
 *    summary: Get a product by id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The product id           
 *    responses:
 *      200:
 *        description: Get product by id
 */
productsRouter.get('/:id', getOneProduct);

module.exports = { productsRouter };
