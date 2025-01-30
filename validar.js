const validar = (req, res) => {
  console.log(req.session);
  if (req.session.usuario){
    res.status(200).send('Sesion validada')
  }else{
    res.status(401).send('No autorizado')
  }
}

module.exports= validar;