export const fetchPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((response) => response.json())
    .then((json) => dispatch(fetchPokemonSuccess(json)));
}

export const fetchPokemonSuccess = (json) => {
  return {
    type: 'FETCH_POKEMON_SUCCESS',
    data: json
  }
}
