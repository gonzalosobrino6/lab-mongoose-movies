const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie.controller');

router.get('/', movieController.list)
router.get('/create', movieController.create)

router.post('/create', movieController.doCreate)

router.get('/:id', movieController.get)
router.get('/:id/edit', movieController.edit)
router.post('/:id/edit', movieController.doEdit)
router.get('/:id/delete', movieController.delete)

module.exports = router;