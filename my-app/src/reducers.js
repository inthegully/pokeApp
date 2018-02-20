import { combineReducers } from 'redux'

const pokemon = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      }
    }
    case 'FETCH_POKEMON_SUCCESS': {
      return {
        ...state,
        ...action.data,
        isLoading: false,
        isLoaded: true
      }
    }
    case 'CATCH_POKEMON_SUCCESS': {
      const { data, name } = action
      return {
        ...state,
        [name]: data
      }
    }
    case 'SHOW_POKE_STATS':
    case 'HIDE_POKE_STATS': {
      const { shouldShowPokeStats, name } = action
      return {
        ...state,
        shouldShowPokeStats: {
          ...state.shouldShowPokeStats,
          [name]: shouldShowPokeStats
        }
      }
    }
    default:
      return state
  }
}

export const getPokemon = state => state.pokemon
export const getShouldShowPokeStats = (state) => state.pokemon.shouldShowPokeStats


const pokeApp = combineReducers({ pokemon })
 
export default pokeApp
