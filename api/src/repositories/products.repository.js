const { Product } = require("../models");

const getProducts = () => {
  return Product.findAll();
};

module.exports = { getProducts };
