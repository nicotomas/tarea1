var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/', async (req, res, next) => {

  var email = req.body.email;
  var contraseña = req.body.contraseña;
  var direccion = req.body.direccion;
  var nombreyapellido = req.body.nombreyapellido;
  var direccion2 = req.body.direccion2;
  var ciudad = req.body.ciudad;
  var codigopostal = req.body.codigopostal;

  // console.log(req.body);

  var obj = {
    to: 'nicotomas181@gmail.com',
    subjetc: 'contacto desde la web',
    html: nombre + " " + apellido + "se contacto a traves y quiere mas info a este correo: " + email +
      ". <br> Ademas se hizo el siguiente comentario: " + mensaje + ". <br> su tel es: " + telefono
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }

  })

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'mensaje enviado correctamente'
  });

});

module.exports = router;