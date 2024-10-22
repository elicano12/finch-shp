const { Sales } = require("../models");

const getSales = () => {
    return Sales.findAll(); 
};

const getSalesByUserID = (userId) => {
    return Sales.findAll({ where: { created_by_user_id: userId } }); 
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