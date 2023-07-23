import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/create-product', productController.createProduct);
router.get('/detail-product/:id', productController.detailProduct);
router.post('/delete-product', productController.deleteProduct);

module.exports = router;
