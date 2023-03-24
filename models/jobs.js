const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    requirements: {
        type: DataTypes.TEXT,
    },
    website: {
        type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
    },
    },
},
{
  freezeTableName: true,
  underscored: true,
    sequelize,
    modelName: 'jobs',
  }
);

module.exports = Jobs;
