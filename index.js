const express=require("express");
const app=express();
require("dotenv").config()


app.use(express.json())


const port = Process.env.PORT
app.listen(port,()=>{
    console.log(`aplicacion ejecutandose en el puerto ${port}`)
})
