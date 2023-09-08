const express = require('express');
const router = express.Router();

const {
  getAllEmployees,
  addNewEmployees,
  deleteEmployee,
  editEmployee,
  getEmployeeById,
} = require('../controllers/employees');

router.get('/', getAllEmployees);
router.post('/', addNewEmployees);
router.delete('/:id', deleteEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', editEmployee);

module.exports = router;
