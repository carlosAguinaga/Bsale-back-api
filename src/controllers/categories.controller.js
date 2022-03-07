const { Category } = require('../models/category');

const getAllCategories = async (req, res) => {
  const categories = await Category.findAndCountAll();
  res.status(200).json(categories);
};

module.exports = { getAllCategories };
