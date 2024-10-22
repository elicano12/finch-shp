const { DataTypes } = require("sequelize");
const sequelize = require("../config/databases/postgres");

const User = sequelize.define(
  "users",
  {
    name: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role_id: {
      type: DataTypes.INTEGER,
      references: { model: "roles", key: "id" },
      allowNull: false,
    },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { underscored: true, timestamps: false }
);

module.exports = User;
