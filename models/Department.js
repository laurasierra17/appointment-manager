const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {
  
}

Department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isAlpha:true},
      reference: {
        model: "doctor",
        key: "id",
      },
    },
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'department',
  }
);

module.exports = Department;
