const { DataTypes}= require('sequelize');
const sequelize =require('../config/database');

const Courses = sequelize.define('Courses', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    area:{
        type:DataTypes.STRING,
        allowNull:false
    },
    duration:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quotas:{
        type:DataTypes.STRING,
        allowNull:false
    },
    groups:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
module.exports = Courses;
