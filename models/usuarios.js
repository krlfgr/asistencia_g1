
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario',{
    document:{
        type:DataTypes.STRING,
        allowNull:false
    },
    documentType:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    surnames:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tel:{
        ttype:DataTypes.INTEGER,
        allowNull:false
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false
    },
})

module.exports = Usuario;