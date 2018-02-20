export const fetchPokemon = () => {
  return (dispatch) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then((json) => dispatch(fetchPokemonSuccess(json)));
  }
}

export const fetchAPokemon = (pokeUrl, pokeName) => {
  return (dispatch) => {
    fetch(pokeUrl)
      .then((response) => response.json())
      .then((json) => dispatch(catchPokemonSuccess(json, pokeName)))
      .then(() => dispatch(showPokeStats(pokeName)))
  }
}

export const fetchPokemonSuccess = (json) => {
  return {
    type: 'FETCH_POKEMON_SUCCESS',
    data: json
  }
}
export const catchPokemonSuccess = (json, pokeName) => {
  return {
    type: 'CATCH_POKEMON_SUCCESS',
    data: json,
    name: pokeName
  }
}
export const showPokeStats = (pokeName) => {
  return {
    type: 'SHOW_POKE_STATS',
    name: pokeName,
    shouldShowPokeStats: true
  }
}
export const hidePokeStats = (pokeName) => {
  return {
    type: 'HIDE_POKE_STATS',
    name: pokeName,
    shouldShowPokeStats: false
  }
}
