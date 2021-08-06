const { Router } = require('express');
const router = Router();

const outletController = require('../controller/outletController');

router.get('/outlet', outletController.all);

router.get('/outlet/:id', outletController.byid);

router.delete('/outlet/:id', outletController.delete);

router.post('/outlet', outletController.insert);

router.put('/outlet', outletController.update);

module.exports = router;