const mongoose = require('mongoose')


let URI

process.env.NODE_ENV = process.env.NODE_ENV  || 'dev';

if( process.env.NODE_ENV === 'dev' ){
    URI = 'mongodb://localhost/Usuarios-landing1';
}else{
    URI = process.env.MONGO_URI;
}

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true)
mongoose.connect(URI)
    .then(db => console.log('La base de datos esta conectada en '+ process.env.NODE_ENV))
    .catch(err => console.error(err))

module.exports = mongoose;