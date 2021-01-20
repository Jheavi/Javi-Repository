const axios = require('axios');
const pokeAPIUrl = require('../constants/pokeUrl');

function pokeController() {
	async function getPokemons({ query }, res) {
		try {
			const { offset = 0, limit = 150 } = query;

			console.log(`${pokeAPIUrl}?limit=${limit}%offset=${offset}`);

			const {
				data: { results }
			} = await axios(`${pokeAPIUrl}?limit=${limit}&offset=${offset}`);

			res.send(results);
		} catch (error) {
			res.send(error);
		}
	}

	return { getPokemons };
}

module.exports = pokeController();
