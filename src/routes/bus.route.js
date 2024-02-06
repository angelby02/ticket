const express = require('express');
const router = express.Router();
const {asignarBus, vistaBus, vistaTipoBus} = require('../controller/bus.controller')

router.get('/registros/asignar_bus', asignarBus);
router.get('/registros/bus', vistaBus);
router.get('/registros/tipo-bus', vistaTipoBus);


module.exports = router;