const express = require('express');
const UserRoutes = require('./users.routes');
const SalesRoutes = require('./sales.routes');
const ProductsRoutes = require('./products.routes');
const router = express.Router();

router.use('/users', UserRoutes);
router.use('/sales', SalesRoutes);
router.use('/products', ProductsRoutes);

module.exports = router;