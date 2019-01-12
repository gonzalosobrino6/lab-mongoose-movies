const express = require('express');
const router = express.Router();

const celebrityController = require('../controllers/celebrity.controller');

router.get('/', celebrityController.list);
router.get('/create', celebrityController.create);

router.post('/create', celebrityController.doCreate);

router.get('/:id', celebrityController.get);
router.get('/:id/delete', celebrityController.delete);

module.exports = router;

