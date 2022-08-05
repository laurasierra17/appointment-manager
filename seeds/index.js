
const sequelize = require('../config/connection');
const { Department, Doctor} = require('../models');

const departmentData = require('./departmentData.json');
const doctorData = require('./doctorData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const departments = await Department.bulkCreate(departmentData);
  const doctors = await Doctor.bulkCreate(doctorData);

  process.exit(0);
};

seedDatabase();
