const Appointment = require('./Appointment');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Department = require('./Department');

// Associations between Appointment and Patient
Appointment.hasMany(Patient, { foreignKey: 'patient_id' });
Patient.belongsTo(Appointment);

// // Associations between Appointment and Doctor
Appointment.hasMany(Doctor, { foreignKey: 'doctor_id' });
Doctor.belongsTo(Appointment);

// Association between Doctor and Patient through Appointment
// Doctor.belongsToMany(Patient, { as: 'patient', through: { model: Appointment} });
// Patient.belongsToMany(Doctor, { as: 'doctor', through: { model: Appointment} });
// Patient.belongsToMany(Doctor, { through: Appointment, foreignKey: 'patient_id' });
// Patient.hasMany(Doctor, {foreignKey: 'doctor_id'});

// Association between Doctor and Department
Doctor.hasOne(Department, { foreignKey: 'department_id'});
Department.belongsTo(Doctor);

// Department.hasMany(Doctor, { foreignKey: ''});
// Doctor.belongsTo(Department, { foreignKey: 'id' });

module.exports = {
    Appointment,
    Doctor,
    Patient,
    Department
  };
  