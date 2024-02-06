//ruta para referenciar al modelo
const {bus} = require('../models/administrador.model')

const asignarBus = (req, res) => {
    res.render('registros/asignar_bus'); 
};
const vistaBus =(req, res) => {
    res.render('registros/bus');
}
const vistaTipoBus =(req, res) => {
    res.render('registros/tipo-bus');
}
module.exports={
   asignarBus,
   vistaBus,
   vistaTipoBus
}
