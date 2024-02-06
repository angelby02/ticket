//ruta para referenciar al modelo
const {ruta} = require('../models/administrador.model')

    const vistaRutas =(req, res) => {
        res.render('registros/rutas-paradas');
    }
    
    const vistaRutasGeneral =(req, res) => {
        res.render('rutas/crear-ruta');
    }
    
    module.exports={
       vistaRutas,
       vistaRutasGeneral
    }
    