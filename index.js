const express=require("express");
const app=express();
require("dotenv").config()

const sequelize=require("./models/attendace")

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`aplicacion ejecutandose en el puerto ${port}`)
})
