const { productsService } = require("../services");

const getAllProducts = async (req, res, next) => {
  try {
    const sales = await productsService.getProducts();
    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

module.exports = {getAllProducts};