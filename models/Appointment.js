const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Appointment extends Model {
  
}

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
