const { Router } = require('express');
const {
  getAllProducts,
  getOneProduct,
} = require('../controllers/products.controller');
const productsRouter = Router();


productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getOneProduct);

module.exports = { productsRouter };
