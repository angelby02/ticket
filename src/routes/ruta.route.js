const express = require('express');
const router = express.Router();
const { vistaRutas, vistaRutasGeneral} = require('../controller/ruta.controller')

router.get('/registros/rutas-paradas', vistaRutas);
router.get('/rutas/crear-ruta', vistaRutasGeneral);




module.exports = router;
