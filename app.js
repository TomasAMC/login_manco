const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// Get the client
const mysql = require('mysql2/promise');
const cors = require('cors')
const session = require('express-session');
const login = require('./login');
const registro = require('./registro');
const validar = require('./validar');
const { obtenerUsuarios, eliminarUsuario } = require('./usuarios');

const corsOptions = {
  origin: 'https://login-mancodecoraciones.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)),

app.use(session({
  secret: process.env.SECRETSESSION || 'jsjjsjsj',
proxy: process.env.NODE_ENV === 'production',
  cookie:{
    secure: false,
    sameSite: 'lax'
  }
}))

// Crear la conexión a la base de datos


app.get('/', (req, res) => {
  res.send('Conversor')
})  
app.get('/login',login)
app.get('/registro',registro)
app.get('/validar',validar )
app.get('/usuarios', obtenerUsuarios)
app.delete('/usuarios', eliminarUsuario)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})