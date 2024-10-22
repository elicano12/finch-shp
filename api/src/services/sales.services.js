const { salesRepository } = require("../repositories");
const { NotFoundError } = require("../utils/errors");


const getSales = async () => {
  const sales = await salesRepository.getSales();

  if (sales.length === 0) {
    throw new NotFoundError("Sales not found");
  }

  return sales;
};

const getSalesByUserID = async (userId) => {
  const sales = await salesRepository.getSalesByUserID(userId);

  if (sales.length === 0) {
    throw new NotFoundError("Sales not found for the given user ID");
  }

  return sales;
};

const createSales = async (sales) => {
  const newSales = await salesRepository.createSales(sales);
  return newSales;
};

const updateSales = async (sales, id) => {
  console.log(sales, id);
  const [rowUpdate, updatedSales] = await salesRepository.updateSales(sales, id);

  if (!updatedSales) {
    throw new NotFoundError("sales not found");
  }

  return updatedSales;
};

const deleteSales = async (id) => {
  const deletedSales = await salesRepository.deleteSales(id);
  if (!deletedSales) {
    throw new NotFoundError("sales not found");
  }
  return deletedSales;
};

module.exports = {
    getSales,
    getSalesByUserID,
    createSales,
    updateSales,
    deleteSales
};
