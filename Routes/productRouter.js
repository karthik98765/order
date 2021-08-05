const { Router } = require('express');
const router = Router();

const productController = require('../controller/productController');

router.get('/product', productController.all);

router.get('/product/:id', productController.byid);

router.delete('/product/:id', productController.delete);

router.post('/product', productController.insert);

router.put('/product', productController.update);

module.exports = router;