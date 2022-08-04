const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { DataTypes, DataTypes, DataTypes, DataTypes } = require('sequelize/types');

class Doctor extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
    department: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isAlpha:true}
    },
    shift_start: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {isDate: true},
    },
    shift_end: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {isDate: true},
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