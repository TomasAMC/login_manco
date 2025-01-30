const connection = require("./conexion");

const login = async (req, res) => {
    const datos = req.query;
    // Una consulta SELECT simple
  try {
      const [results, fields] = await connection.query(
      "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `clave` = ?",
      [datos.usuario, datos.clave]
      );
      if (results.length > 0){
        req.session.usuario = datos.usuario;
        res.status(200).send('Inicio correctamente')
      }else{
        res.status(401).send('Datos incorrectos')
      }
    
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
      console.log(err);
      res.status(500).send('Error del servidor')
    
  }
    }

module.exports= login; 