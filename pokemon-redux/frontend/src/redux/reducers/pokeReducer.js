import actionTypes from '../actions/actionTypes';

export default function pokeReducer(state = {}, action) {
	let updatedState;
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			updatedState = { ...state, pokemonList: action.pokemonList };
			break;
		case actionTypes.LOAD_POKEMONS_ERROR:
		default:
			updatedState = state;
			break;
	}

	return updatedState;
}
