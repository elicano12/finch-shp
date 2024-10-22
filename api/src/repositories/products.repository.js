const { models } = require("../config/databases/postgres");

const Product = models.Products;

const getProducts = () => {
  return Product.findAll();
};

module.exports = { getProducts };
