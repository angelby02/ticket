//ruta para referenciar al modelo
const {administrador} = require('../models/administrador.model')

const vistaResgistro = (req, res) => {
    res.render('administrador/registro_personal'); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

const vistaRoles = (req, res) => {
    res.render('administrador/roles'); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    vistaRoles,
    vistaResgistro
}



