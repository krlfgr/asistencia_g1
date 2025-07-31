const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const courses  = require('../models/Courses')
const Usuarios = require('../models/usuarios')

const attendance = sequelize.define('attendance', {

  Date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  entry_time: {
    type: DataTypes.STRING,
    allowNull: true
  },
  exit_time: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Usuarios, 
      key: 'document'
    }
  },
  course_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Courses,
      key: 'id'
    }
  },
 
  indexes: [
    {
      unique: true,
      fields: ['id', 'date', 'id_Curse']
    }
  ]

});


module.exports = attendance;



 
    