const mongoose = require('mongoose');
const uniq = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    correo: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    }
});

usuarioSchema.plugin( uniq, { message: '{PATH} debe de ser único'})
module.exports = mongoose.model( 'Usuario', usuarioSchema  )
