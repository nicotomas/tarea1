var express = require('express');
var router = express.Router();
var novedadesmodels = require('./../../models/novedadesmodels');


/* GET home page. */
router.get('/', async function (req, res, next) {

    var novedades = await novedadesmodels.getNovedades()

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });

});

// para eliminar una novedad
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesmodels.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
});


module.exports = router;