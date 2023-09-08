const { prisma } = require('../prisma/prisma-client');

/**
 * @route GET /api/employees
 * @desc get all employees
 * @access Private
 */
const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "couldn't get employees" });
  }
};

/**
 * @route POST /api/employees
 * @desc add new employee
 * @access Private
 */
const addNewEmployees = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({ message: 'all fields are required' });
    }

    const newEmployee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(newEmployee);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * @route DELETE /api/employees/:id
 * @desc delete employee
 * @access Private
 */
const deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json('OK');
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * @route PUT /api/employees/:id
 * @desc edit employee
 * @access Private
 */
const editEmployee = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const editedEmployee = await prisma.employee.update({
      where: {
        id,
      },
      data,
    });

    res.status(204).json(editedEmployee);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * @route GET /api/employees/:id
 * @desc get employee by id
 * @access Private
 */
const getEmployeeById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllEmployees,
  addNewEmployees,
  deleteEmployee,
  editEmployee,
  getEmployeeById,
};
