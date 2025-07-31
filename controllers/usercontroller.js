const Usuario=require('../models/Usuario');


exports.Userdocument= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Userdocumenttype= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Username= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Userlastnames= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Useremail= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Userphone= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usernationality= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}