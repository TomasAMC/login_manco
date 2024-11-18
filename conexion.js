// Crear la conexión a la base de datos
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'login_manco',
  });

  module.exports=connection;