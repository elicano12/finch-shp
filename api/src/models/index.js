const { Users, UsersSchema } = require("./users.models");
const { Sales, SalesSchema } = require("./sales.models");
const { Products, ProductsSchema } = require("./products.models");
const { Roles, RolesSchema } = require("./roles.models");

function setupModels(sequelize) {
  Users.init(UsersSchema, Users.config(sequelize));
  Roles.init(RolesSchema, Roles.config(sequelize));
  Products.init(ProductsSchema, Products.config(sequelize));
  Sales.init(SalesSchema, Sales.config(sequelize));

  Users.associate(sequelize.models);
  Roles.associate(sequelize.models);
  Products.associate(sequelize.models);
  Sales.associate(sequelize.models);
}

module.exports = setupModels;
