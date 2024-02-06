const express = require('express');
const router = express.Router();
const { vistaLogin } = require('../controller/loginTicket.controller');

router.get('/auth/login',vistaLogin);


module.exports = router;