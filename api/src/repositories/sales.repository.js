const { models } = require("../config/databases/postgres");

const Sales = models.Sales;

const getSales = () => {
  return Sales.findAll({
    include: [
      { model: models.Users, as: "user", attributes: ["name", "id"] },
      { model: models.Products, as: "product", attributes: ["name", "id"] },
    ],
    order: [["created_at", "ASC"]],
  });
};

const getSalesByUserID = (userId) => {
  return Sales.findAll({
    where: { user_id: userId },
    include: [
      { model: models.Users, as: "user", attributes: ["name", "id"] },
      { model: models.Products, as: "product", attributes: ["name", "id"] },
    ],
    order: [["created_at", "ASC"]],
  });
};

const createSales = (sales) => {
  return Sales.create(sales);
};

const updateSales = (sales, id) => {
  return Sales.update(sales, { where: { id }, returning: true });
};

const deleteSales = (id) => {
  return Sales.destroy({ where: { id } });
};

module.exports = {
  getSales,
  getSalesByUserID,
  createSales,
  updateSales,
  deleteSales,
};
