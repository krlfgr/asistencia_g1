const { DataTypes} = require('sequelize');
const sequelize =require('../config/database');

const TypeDocument = sequelize.define('TypeDocument',{
    type:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
        
    },
});

module.exports=TypeDocument;