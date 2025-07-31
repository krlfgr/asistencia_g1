
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User',{
    document:{
        type:DataTypes.STRING,
        allowNull:false
    },
    documentType:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: doctype,
            key: 'id'
        }
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        ttype:DataTypes.INTEGER,
        allowNull:false
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false
    },
})

module.exports = Usuario;