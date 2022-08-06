const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// const { DataTypes, DataTypes, DataTypes, DataTypes } = require('sequelize/types');

class Patient extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Patient.init(
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
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isAlphanumeric:true},
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len:[8]},
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
);

module.exports = Patient;
