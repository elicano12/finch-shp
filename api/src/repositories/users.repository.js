const { models } = require("../config/databases/postgres");
const bcrypt = require("bcrypt");

const getUserByEmail = (email) => {
  return models.Users.findOne({ where: { email } });
};

const getUsers = () => {
  return models.Users.findAll({ include: ["role"] });
};

const createUser = async (user) => {
  const hash = await bcrypt.hash(user.password, 10);
  const newUser = await models.Users.create({
    ...user,
    password: hash,
  });
  delete newUser.dataValues.password;
  return newUser;
};

const updateUser = (user, id) => {
  return models.Users.update(user, { where: { id }, returning: true });
};

const deleteUser = (id) => {
  return models.Users.destroy({ where: { id } });
};

module.exports = {
  getUserByEmail,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
