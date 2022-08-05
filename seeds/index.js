const sequelize = require('../config/connection');
const seedDepartments = require('./department-seeds');
const seedDoctors = require('./doctor-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();