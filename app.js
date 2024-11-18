const express = require('express')
const app = express()
const port = 3000

// Get the client
const cors = require('cors')
const session = require('express-session');
const usuarios = require('./usuarios');
const login = require('./login');
const registro = require('./registro');
const {obtenerUsuarios,eliminarUsuario}= require('./usuarios');
const validar = require('./validar');


app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}))
app.use(session({
  secret: 'jsjjsjsj',
  //resave: false,
  //saveUninitialized: false
}));


app.get('/', (req, res) => {
  res.send('Converso')
})  

app.get('/login', login)

  app.get('/validar', validar)

app.get('/registro',registro)

app.get('/usuarios',obtenerUsuarios)

app.delete('/usuarios', eliminarUsuario)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})