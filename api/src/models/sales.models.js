const { DataTypes, Model } = require("sequelize");

const SALES_TABLE_NAME = "sales";

const SalesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  product_id: { type: DataTypes.STRING(50), allowNull: false },
  requested_amount: { type: DataTypes.NUMERIC(12, 0), allowNull: false },
  franchise: { type: DataTypes.STRING(20), allowNull: true },
  rate: { type: DataTypes.NUMERIC(4, 2), allowNull: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_by_user_id: {
    type: DataTypes.INTEGER,
    references: { model: "users", key: "id" },
    allowNull: true,
  },
};

class Sales extends Model {
  static associate(models) {
    this.belongsTo(models.Users, {
      as: "user",
      foreignKey: "user_id",
    });
    this.belongsTo(models.Products, {
      as: "product",
      foreignKey: "product_id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALES_TABLE_NAME,
      modelName: "Sales",
      timestamps: false,
      underscored: true,
    };
  }
}

module.exports = { Sales, SalesSchema, SALES_TABLE_NAME };
