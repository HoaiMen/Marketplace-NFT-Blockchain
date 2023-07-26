const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

router.get('/cart', cartController.getAllCart);
router.get('/cart/detail/:id', cartController.getDeleteCart);
router.post('/cart/add', cartController.addCart);
router.delete('/cart/delete/:id', cartController.deleteCarts);
module.exports = router;
