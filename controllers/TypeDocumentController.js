const TypeDocument=require('../models/TypeDocument');

exports.getTypeDocument= async(req, res)=>{
    try{
        const document = await TypeDocument.findAll();
        return res.json(document);
    }
    catch(error){
        return res.json(error)
    }
}