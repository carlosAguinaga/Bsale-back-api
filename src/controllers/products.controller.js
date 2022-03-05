const { db } = require('../db/connection');
const { Product } = require('../models/product');
const { Category } = require('../models/category');

const getAllProducts = async (req, res) => {
  // const products = await db.query('SELECT * FROM product');

  try {
    const productos = await Product.findAll({
      where: {
        category: 5,
      },
    });
    res.json({ msg: productos });
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  const category = await Category.findAll();
  res.json({ msg: category });
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
