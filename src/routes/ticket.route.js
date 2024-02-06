const express = require('express');
const router = express.Router();
const { serieTicket, reservaTicket, ventaTicket } = require('../controller/ticket.controller');

router.get('/registros/serie-ticket', serieTicket);
router.get('/ticket/reserva', reservaTicket);
router.get('/ticket/venta', ventaTicket);




module.exports = router;
