const { DataTypes } = require("sequelize");
const sequelize = require("../config/databases/postgres");

const Product = sequelize.define(
  "products",
  {
    name: { type: DataTypes.STRING(50), allowNull: false },
  },
  { underscored: true, timestamps: false }
);

module.exports = Product;
