const { Router } = require('express');
const PlaceController = require('./controllers/Place');
const SearchController = require('./controllers/Search');

const routes = Router();

routes.get('/places', PlaceController.index);
routes.post('/places', PlaceController.create);

routes.get('/places/:id', PlaceController.show);
routes.put('/places/:id', PlaceController.update);
routes.delete('/places/:id', PlaceController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;