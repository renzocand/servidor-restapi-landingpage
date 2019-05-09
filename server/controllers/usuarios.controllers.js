const Usuario = require('../models/usuario.model')

const Ctrl = {};

Ctrl.crearusuario = async (req, res) => {

    try {
        let body = req.body;

        let usuario = new Usuario({
            nombre: body.nombre,
            correo: body.correo
        });

        let respuesta = await usuario.save();

        res.json({
            status: 'Usuario Agregado',
            usuario: respuesta
        })
    } catch (e) {
        let body = req.body;
        res.json({
            error: e,
            body
        })
    }
}

Ctrl.mostrarusuarios = async (req,res) =>{
    try {
        const usuarios = await Usuario.find();
        res.json({
            status: 'ok',
            usuarios
        })
    } catch (error) {
        res.json({
            error
        })
    }
}


module.exports = Ctrl;
