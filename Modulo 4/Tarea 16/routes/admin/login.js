var express = require('express');
var router = express.Router();
var usuariosmodels = require('./../../models/usuariosmodels');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout',
    });
    next();
}); 

    // para salir

    router.get('/logout', function (req, res, next) {
        req.session.destroy();
        res.render('admin/login', {
            layout: 'admin/layout'
        });
        next();
    });

    router.post('/', async (req, res, next) => {
        try {
            var user = req.body.usuario;
            var password = req.body.password;

            console.log(req.body);

            var data = await usuariosmodels.getUserAndPassword(user, password);

            if (data != undefined) {
                req.session.id_usuario = data.id,
                    req.session.nombre = data.usuario,
                    res.redirect('admin/novedades');
            } else {
                res.render('admin/login', {
                    layout: 'admin/layout',
                    error: true
                });
            }
        } catch (error) {
            console.log(error)
        }
    });

    module.exports = router;