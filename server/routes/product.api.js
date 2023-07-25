const express = require('express');
const middleware = require('../middleware/auth');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProduct);
router.post('/products/add', productController.addProducts);

module.exports = router;
