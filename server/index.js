const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { mongoose } = require('./database')
const cors = require('cors')
const app = express()

//Setings
process.env.PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ origin:'*' }))

//Routes
app.use('/api/usuarios', require('./routes/usuarios.routes'));
 

//Static files


//Starting server
 app.listen(process.env.PORT, ()=>{
  console.log('Conectado en el puerto ', process.env.PORT);
})