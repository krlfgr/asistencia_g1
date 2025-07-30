const express = require('express');
const router = express.Router();
const Usuariocontroller=require('../controllers/Usuariocontroller')


router.get("/usuarios/document",Usuariocontroller.Usuariosdocument);
router.get("/usuarios/buscar/typedocument",Usuariocontroller.Usuariosdocumentype)


module.exports = router;