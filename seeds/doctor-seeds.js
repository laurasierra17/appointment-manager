const { Doctor } = require('../models');

const doctorData = [
  {
    first_name: 'Dr.',
    last_name: 'Sierra',
    shift_start: '2022-08-11 09:00:00',
    shift_end: '2022-08-11 14:00:00',
  },
  {
    first_name: 'Dr.',
    last_name: 'Mccarthy',
    shift_start: '2022-08-11 14:00:00',
    shift_end: '2022-08-11 19:00:00',
  },
  {
    first_name: 'Dr.',
    last_name: 'Zhang',
    shift_start: '2022-08-12 09:00:00',
    shift_end: '2022-08-12 14:00:00',
  },
  {
    first_name: 'Dr.',
    last_name: 'Lee',
    shift_start: '2022-08-12 14:00:00',
    shift_end: '2022-08-12 19:00:00',
  },
  {
    first_name: 'Dr.',
    last_name: 'Chenette',
    shift_start: '2022-08-13 11:00:00',
    shift_end: '2022-08-13 15:00:00',
  },
  {
    first_name: 'Dr.',
    last_name: 'Nunes',
    shift_start: '2022-08-13 15:00:00',
    shift_end: '2022-08-11 19:00:00',
  },
];

const seedCategories = () => Doctor.bulkCreate(doctorData);

module.exports = seedCategories;
