const { terminal} = require('../models/terminal.model');

const vistaTerminal = (req, res) => {
    res.render('registros/terminal'); 
};

module.exports={
   vistaTerminal
}
