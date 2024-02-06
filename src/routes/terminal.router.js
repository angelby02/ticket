const express = require('express');
const router = express.Router();
const { vistaTerminal} = require('../controller/terminal.controller')

router.get('/registros/terminal', vistaTerminal);



module.exports = router;
