import { combineReducers } from 'redux'

const pokemon = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      }
    case 'FETCH_POKEMON_SUCCESS':
      return {
        ...state,
        ...action.data,
        isLoading: false,
        isLoaded: true
      }
    case 'CATCH_POKEMON_SUCCESS':
      return {
        ...state,
        [action.name]: action.data
      }
    default:
      return state
  }
}

export const getPokemon = state => state.pokemon

const pokeApp = combineReducers({ pokemon })
 
export default pokeApp
