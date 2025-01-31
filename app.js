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
  origin: ['http://localhost:5173', 'https://login-mancodecoraciones.vercel.app'], 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
  credentials: true 
};

app.use(cors(corsOptions));

const RedisStore = require("connect-redis").default;
const Redis = require("ioredis");

const redisClient = new Redis(process.env.REDIS_URL);

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SECRETSESSION || 'jsjjsjsj',
  resave: false, 
  saveUninitialized: true,
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