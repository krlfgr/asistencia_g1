const express = require('express');
const router = express.Router();
const Usuariocontroller=require('../controllers/Usuariocontroller')


router.get("/usuarios/document",Usercontroller.Userdocument);
router.get("/usuarios/buscar/typedocument",Usercontroller.Userdocumentype)
router.post("usuarios/crear/name",usercontroller.username)
router.put("usuarios/actualizar/lastname",userconroller.lastname)
router.delete("usuarios/eliminar/email",usercontroller.email)

module.exports = router;