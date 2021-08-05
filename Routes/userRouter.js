const { Router } = require('express');
const router = Router();

const userController = require('../controller/userController');

router.get('/user', userController.all);

router.get('/user/:id', userController.byid);

router.delete('/user/:id', userController.delete);

router.post('/user', userController.insert);

router.put('/user', userController.update);

module.exports = router;