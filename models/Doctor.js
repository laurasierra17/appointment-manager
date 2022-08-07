const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Doctor extends Model {}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isAlpha:true},
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isAlpha:true},
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'department',
            key: 'id',
        }
    },
    shift_start: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    shift_end: {
        type: DataTypes.TIME,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'doctor',
  }
);

module.exports = Doctor;