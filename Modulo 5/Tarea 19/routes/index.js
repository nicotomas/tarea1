var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesmodels = require('./../models/novedadesmodels');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function (req, res, next) {
  var novedades = await novedadesmodels.getNovedades();
novedades=novedades.splice(0,5); //seleccionamos los primeros 5
novedades=novedades.map(novedad =>{
  if (novedad.img_id) {
    const imagen =cloudinary.url(novedad.img_id, {
      width:460,
      crop: 'fill'
    });
    return {
      ...novedad,
      imagen
    }
  } else {
    return {
      ...novedad,
      imagen: '/images/imagenerror.jpg'
    }
  }
});


  res.render('index', {
    novedades
  });
});



router.post('/', async (req, res, next) => {

  var email = req.body.email;
  // var contraseña = req.body.contraseña;
  // var direccion = req.body.direccion;
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var telefono = req.body.telefono;
  var mensaje = req.body.comentarios;

  console.log(req.body);

  var obj = {
    to: 'nicotomas181@gmail.com',
    subjetc: 'contacto desde la web',
    html: nombre + " " + apellido + " Se contacto a traves y quiere mas info a este correo: " + email +
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
    message: 'Mensaje enviado correctamente'
  });

});

module.exports = router;