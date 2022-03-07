const { db } = require('../db/connection');
const { Op } = require('sequelize');
const { Product } = require('../models/product');
const { Category } = require('../models/category');

const getAllProducts = async (req, res) => {
  // const products = await db.query('SELECT * FROM product');
  console.log(req.query);

  const whereOptions = {};

  if (req.query.category) {
    whereOptions.category = req.query.category;
  }
  
  if (req.query.search) {
    console.log('in search', req.query.search)
    whereOptions.name = {
      [Op.like]: `%${req.query.search}%`,
    };
  }
  

  try {
    const productos = await Product.findAndCountAll({
      where: whereOptions,
    });
    res.json( productos );
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res) => {
  const params = req.query;
  const id = req.params.id;
  const producto = await Product.findByPk(id);
  res.json({ msg: producto });
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
