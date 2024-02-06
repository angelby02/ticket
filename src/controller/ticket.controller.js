const serieTicket = (req, res) => {
    res.render('registros/boletos'); 
};

const reservaTicket = (req, res) => {
    res.render('ticket/reserva'); 
};
const ventaTicket = (req, res) => {
    res.render('ticket/venta'); 
};
module.exports={
   serieTicket,
   reservaTicket,
   ventaTicket
}
