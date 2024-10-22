const { DataTypes, Model } = require("sequelize");

const USERS_TABLE_NAME = "users";

const UsersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
};

class Users extends Model {
  static associate(models) {
    this.belongsTo(models.Roles, { as: "role", foreignKey: "role_id" });
    this.hasMany(models.Sales, { foreignKey: "user_id" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE_NAME,
      modelName: "Users",
      timestamps: false,
      underscored: true,
    };
  }
}
module.exports = { Users, UsersSchema, USERS_TABLE_NAME };
