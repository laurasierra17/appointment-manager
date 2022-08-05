const Appointment = require('./Appointment');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Department = require('./Department');

// Association between Doctor and Patient through Appointment
Doctor.belongsToMany(Patient, {through: Appointment, foreignKey: 'patient_id'});
// Doctor.hasMany(Patient, {through: Appointment, foreignKey: 'patient_id'});
Patient.belongsToMany(Doctor, {through: Appointment, foreignKey: 'doctor_id'});
// Patient.hasMany(Doctor, {through: Appointment, foreignKey: 'doctor_id'});

// Association between Doctor and Department
Department.hasMany(Doctor);
Doctor.belongsTo(Department);

module.exports = {
    Appointment,
    Doctor,
    Patient,
    Department
  };
  