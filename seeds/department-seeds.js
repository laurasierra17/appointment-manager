const { Department } = require('../models');

const departmentData = [
  {
    name: 'Cardiology',
  },
  {
    name: 'Gynecology',
  },
  {
    name: 'Pediatrics',
  },
  {
    name: 'Surgery',
  },
  {
    name: 'Obstetrics',
  },
  {
    name: 'Neurology',
  },
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
