const { productsRepository } = require("../repositories");
const { NotFoundError } = require("../utils/errors");

const getProducts = async () => {
  const sales = await productsRepository.getProducts();

  if (sales.length === 0) {
    throw new NotFoundError("Sales not found");
  }

  return sales;
};

module.exports = { getProducts };
