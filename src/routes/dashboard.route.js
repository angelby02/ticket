const express = require('express');
const router = express.Router();
const { paginaPrincipal } = require('../controller/dashboard.controller');

router.get('/',paginaPrincipal);


module.exports = router;