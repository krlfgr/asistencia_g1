const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Entry_Time: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Exit_Time: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_Curse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  indexes: [
    {
      unique: true,
      fields: ['nombre', 'fecha', 'id_curso']
    }
  ]

});

module.exports = User;


 
    