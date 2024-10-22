const express = require("express");
const userController = require("../controllers/users.controllers");
const verifyToken = require("../middlewares/verifyTokenMiddleware");
const validateRequest = require("../middlewares/validator");
const { createUserSchema } = require("../middlewares/schemas/users.schema");

const UserRoutes = express.Router();

UserRoutes.post("/login", userController.loginToken);

UserRoutes.use(verifyToken);
UserRoutes.get("/", userController.getAllUsers);
UserRoutes.post(
  "/",
  validateRequest(createUserSchema),
  userController.createUser
);
UserRoutes.put("/:id", userController.updateUser);
UserRoutes.delete("/:id", userController.deleteUser);

module.exports = UserRoutes;
