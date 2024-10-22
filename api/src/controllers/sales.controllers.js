const { salesService } = require("../services");

const getAllSales = async (req, res, next) => {
  try {
    const sales = await salesService.getSales();
    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const getByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await salesService.getSalesByUserID(id);
    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const createSales = async (req, res, next) => {
  try {
    const newSale = await salesService.createSales(req.body);
    return res.status(201).json(newSale);
  } catch (err) {
    next(err);
  }
};

const updateSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {body} = req.body; 
    const updatedSales = await salesService.updateSales(body, id);
    return res.status(200).json(updatedSales);
  } catch (err) {
    next(err);
  }
};

const deleteSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSales = await salesService.deleteSales(id);
    return res.json({
      message: `Sales deleted successfully with saleId ${id}`,
      deletedCount: deletedSales,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSales,
  getByUserId,
  createSales,
  updateSales,
  deleteSales,
};
