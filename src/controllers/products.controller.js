const { Op } = require('sequelize');
const { Product } = require('../models/product');

const getAllProducts = async (req, res) => {
  // const products = await db.query('SELECT * FROM product');

  const whereOptions = {};

  if (req.query.category) {
    whereOptions.category = req.query.category;
  }

  if (req.query.search) {
    whereOptions.name = {
      [Op.like]: `%${req.query.search}%`,
    };
  }

  try {
    const productos = await Product.findAndCountAll({
      where: whereOptions,
    });
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  const producto = await Product.findByPk(id);
  res.status(200).json({ msg: producto });
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
