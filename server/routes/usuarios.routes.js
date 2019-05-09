const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuarios.controllers')

router.get('/', Usuario.mostrarusuarios)

router.post('/', Usuario.crearusuario )

module.exports = router;