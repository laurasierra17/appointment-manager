const Appointment = require('./Appointment');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Department = require('./Department');

// Associations between Appointment and Patient
Patient.belongsToMany(Appointment, { through: Appointment, foreignKey: 'patient_id' });
Appointment.belongsToMany(Patient, { through: Appointment, foreignKey: 'id' });

// Associations between Appointment and Doctor
Doctor.belongsToMany(Appointment, { through: Appointment, foreignKey: 'doctor_id' });
Appointment.belongsToMany(Doctor, { through: Appointment, foreignKey: 'id' });

// Associations between Patient and Doctor
Patient.belongsToMany(Doctor, { through: Appointment, foreignKey: 'patient_id', as: 'doctors' });
Doctor.belongsToMany(Patient, { through: Appointment, foreignKey: 'doctor_id', as: 'patients' });

// Association between Doctor and Department
Department.hasMany(Doctor, {
  foreignKey: 'department_id',
  onDelete: 'CASCADE'
})
Doctor.belongsTo(Department, { foreignKey: 'department_id' });

module.exports = {
    Appointment,
    Doctor,
    Patient,
    Department
  };
  