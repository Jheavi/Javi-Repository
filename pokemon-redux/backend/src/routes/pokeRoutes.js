const { Router } = require('express');
const pokeController = require('../controllers/pokeController');

function pokeRouter() {
	const router = Router();

	router.route('/').get(pokeController.getPokemons);

	return router;
}

module.exports = pokeRouter;
