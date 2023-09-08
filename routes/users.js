const express = require('express');
const router = express.Router();
const { current } = require('../controllers/user');

router.get('/current', current);

module.exports = router;
