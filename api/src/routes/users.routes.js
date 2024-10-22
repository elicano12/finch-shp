const express = require("express");
const userController = require("../controllers/users.controllers");
const verifyToken = require("../middlewares/verifyTokenMiddleware");

const UserRoutes = express.Router();

UserRoutes.post('/login', userController.loginToken);

UserRoutes.use(verifyToken)
UserRoutes.get("/", userController.getAllUsers);
UserRoutes.post("/", userController.createUser);
UserRoutes.put("/:id", userController.updateUser);
UserRoutes.delete("/:id", userController.deleteUser);

module.exports = UserRoutes;
