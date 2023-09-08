const express = require('express');
const router = express.Router();
const { login, register, current } = require('../controllers/user');

/* GET users listing. */
router.post('/login', login);
router.post('/register', register);
router.get('/current', current);

module.exports = router;
