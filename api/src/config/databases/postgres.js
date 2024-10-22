const { Sequelize } = require("sequelize");

const config = require("../");
const setupModels = require("../../models");

const sequelize = config.isTesting
  ? new Sequelize("sqlite::memory:", { logging: false })
  : new Sequelize(config.db_name, config.db_user, config.db_password, {
      dialect: "postgres",
      host: config.db_host,
      port: config.db_port,
      logging: false,
    });

setupModels(sequelize);

module.exports = sequelize;
