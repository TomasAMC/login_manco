const mysql = require('mysql2/promise');
// Crear la conexión a la base de datos
//mysql://root:KUdOXzAcBsMjakTOFutfIXFNMvppnSoi@autorack.proxy.rlwy.net:46600/railway

const connection = mysql.createPool({
  host: process.env.HOSTDB || 'localhost',
  user: process.env.USERDB || 'root',
  database: process.env.DB || 'login2',
  password: process.env.PASSWORD || '',
  port: process.env.PORTDB || 3306,
});
module.exports = connection;