// const sequelize = require('../config/connection');
// const seedDepartments = require('./department-seeds');
// const seedDoctors = require('./doctor-seeds');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedDepartments();

//   await seedDoctors();

//   process.exit(0);
// };

// seedAll();

const sequelize = require('../config/connection');
const { Appointment, Department, Doctor, Patient } = require('../models');

const departmentData = require('./departmentData.json');
const doctorData = require('./doctorData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const departments = await Department.bulkCreate(departmentData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
