const express = require("express");
const productController = require("../controllers/products.controllers");
const verifyToken = require("../middlewares/verifyTokenMiddleware");

const ProductsRoutes = express.Router();

ProductsRoutes.get("/",verifyToken, productController.getAllProducts);

module.exports = ProductsRoutes;