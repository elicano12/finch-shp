const { DataTypes } = require("sequelize");
const sequelize = require("../config/databases/postgres");

const Role = sequelize.define(
  "roles",
  {
    name: { type: DataTypes.STRING(50), allowNull: false },
  },
  { underscored: true, timestamps: false }
);

module.exports = Role;
