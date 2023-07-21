import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/create-product', productController.createProduct);
module.exports = router;
