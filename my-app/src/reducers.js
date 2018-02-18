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
        pokemon: action.data,
        isLoading: false,
        isLoaded: true
      }
    case 'FETCH_POKEMON_FAILURE':
      return {

      }
    default:
      return state
  }
}
 
const pokeApp = combineReducers({
  pokemon
})
 
export default pokeApp
