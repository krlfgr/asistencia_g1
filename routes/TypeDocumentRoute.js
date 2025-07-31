const express = require('express');
const router = express.Router();
const TypeDocument = require('../controllers/TypeDocumentController')

router.get("/asistencia/allTypeDocument",TypeDocument.getTypeDocument);

module.exports=router;