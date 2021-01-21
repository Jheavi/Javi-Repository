/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPokemons } from '../../redux/actions/pokeActions';
import './PokemonList.css';

function PokemonList({ pokemonList, dispatch }) {
	useEffect(() => {
		if (!pokemonList && !pokemonList?.length) {
			dispatch(requestPokemons());
		}
	}, []);

	return (
		<main>
			<h1>Pokemon List</h1>
			<ul className="pokemon-list">
				{pokemonList &&
					pokemonList.map((pokemon, index) => {
						return (
							<li key={index} className="pokemon-list_pokemon">
								<p className="pokemon__name">{pokemon.name}</p>
							</li>
						);
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
