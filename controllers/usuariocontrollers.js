const Usuario=require('../models/Usuario');


exports.Usuariosdocument= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usuariosdocumenttype= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usuariosname= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usuariossurnames= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usuariosemail= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usuariostel= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}

exports.Usuariosnationality= async(req, res)=>{
    try{
        const usuarios = await Usuario.findALL();
        res.json(usuarios);
    }catch(error){
        res.json({mensaje:error})
    }
    
    
    
}