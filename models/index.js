const Appointment = require('./Appointment');
const Doctor = require('./Doctor');
const Patient = require('./Patient');

Doctor.belongsToMany(Patient, {through: Appointment, foreignKey: 'patient_id'});
Doctor.hasMany(Patient, {through: Appointment, foreignKey: 'patient_id'});

Patient.belongsToMany(Doctor, {through: Appointment, foreignKey: 'doctor_id'});
Patient.hasMany(Doctor, {through: Appointment, foreignKey: 'doctor_id'});

module.exports = {
    Appointment,
    Doctor,
    Patient,
    
  };
  