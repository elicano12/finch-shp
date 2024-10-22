const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/databases/postgres");

const ROLES_TABLE_NAME = "roles";

const RolesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
};

class Roles extends Model {
  static associate(models) {
    this.hasMany(models.Users, {
      as: "user",
      foreignKey: "role_id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLES_TABLE_NAME,
      modelName: "Roles",
      timestamps: false,
      underscored: true,
    };
  }
}

module.exports = { Roles, RolesSchema, ROLES_TABLE_NAME };
