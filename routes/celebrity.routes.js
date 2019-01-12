const express = require('express');
const router = express.Router();

const celebrityController = require();

router.get('/', celebrityController.list);
