const router = require('express').Router();

const userRouters = require('./users');
const employeesRoutes = require('./employees');
const { login, register } = require('../controllers/user');

const { auth } = require('../middlewares/auth');

router.post('/login', login);
router.post('/register', register);

router.use(auth);

router.use('/user', userRouters);
router.use('/employees', employeesRoutes);

module.exports = router;
