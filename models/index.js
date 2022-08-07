const Appointment = require('./Appointment');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Department = require('./Department');

// Associations between Appointment and Patient
Appointment.hasMany(Patient, { foreignKey: 'patient_id' });
Patient.belongsTo(Appointment, { foreignKey: 'id' });

// // Associations between Appointment and Doctor
Appointment.hasMany(Doctor, { foreignKey: 'doctor_id' });
Doctor.belongsTo(Appointment, { foreignKey: 'id' });

// Association between Doctor and Patient through Appointment
// Doctor.belongsToMany(Patient, { as: 'patient', through: { model: Appointment} });
// Patient.belongsToMany(Doctor, { as: 'doctor', through: { model: Appointment} });
// Patient.belongsToMany(Doctor, { through: Appointment, foreignKey: 'patient_id' });
// Patient.hasMany(Doctor, {foreignKey: 'doctor_id'});

// Association between Doctor and Department
Department.hasMany(Doctor);
Doctor.belongsTo(Department);

module.exports = {
    Appointment,
    Doctor,
    Patient,
    Department
  };
  