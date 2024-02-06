const express = require('express');
const router = express.Router();
const {vistaResgistro, vistaRoles} = require('../controller/administradorController')

router.get('/administrador/registro',vistaResgistro);
router.get('/administrador/roles',vistaRoles);


module.exports = router;