const express = require('express');
const routes = express.Router();
const IgrejaController = require('./controller/igrejaController');

routes.get('/',(req,res)=>{
    res.send('Tudo Certo, Nada Errado');
});

routes.get('/igrejas', IgrejaController.list);
routes.get('/igreja/:id', IgrejaController.show);
routes.post('/igreja', IgrejaController.create);
routes.put('/igreja/:id', IgrejaController.update);
routes.delete('/igreja/:id', IgrejaController.delete);



module.exports = routes;