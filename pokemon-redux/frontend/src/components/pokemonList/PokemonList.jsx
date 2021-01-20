/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPokemons } from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch }) {
	useEffect(()=> {
		if (!pokemonList && !pokemonList?.length) {
			dispatch(requestPokemons());
		}
	}, [])

	return (
		<main>
			<h1>Pokemon List</h1>
			<ul>
				{pokemonList &&
					pokemonList.map((pokemon, index) => {
						return <li key={index}>{pokemon.name}</li>;
					})}
			</ul>
		</main>
	);
}

function mapStateToProps({ pokeReducer: { pokemonList } }) {
	return {
		pokemonList
	};
}

export default connect(mapStateToProps)(PokemonList);
