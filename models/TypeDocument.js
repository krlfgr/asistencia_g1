const { DataTypes} = require('sequelize');
const sequelize =require('../config/database');

const TypeDocument = sequelize.define('TypeDocument',{
    tipo:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

module.exports=TypeDocument;