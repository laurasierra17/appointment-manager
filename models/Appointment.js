const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model { }

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "doctor",
        key: "id",
      },
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "patient",
        key: "id",
      },
    },
    visit_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: { isDate: true },
    },
    visit_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    visit_reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'appointment',
  }
);

module.exports = Appointment;
