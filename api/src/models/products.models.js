const { DataTypes, Model } = require("sequelize");

const PRODUCTS_TABLE_NAME = "products";

const ProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
};

class Products extends Model {
  static associate(models) {
    this.hasMany(models.Sales, {
      as: "sales",
      foreignKey: "product_id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE_NAME,
      modelName: "Products",
      timestamps: false,
      underscored: true,
    };
  }
}
module.exports = { Products, ProductsSchema, PRODUCTS_TABLE_NAME };
