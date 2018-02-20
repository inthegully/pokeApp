import React, { Fragment } from 'react';
import {
  fetchAPokemon,
  hidePokeStats,
  showPokeStats
} from './actions';

const Pokemon = ({ pokemons, shouldShowPokeStats, dispatch, pokemon }) => {
  const { name, url } = pokemon
  return (
    <Fragment>
      <h3 onClick={() => {
        if (!pokemons[name]) {
          return dispatch(fetchAPokemon(url, name))
        } else if (!shouldShowPokeStats[name] && pokemons[name]) {
          return dispatch(showPokeStats(name))
        } else {
          return dispatch(hidePokeStats(name))
        }
      }
      }>
        {name}
      </h3>
      {shouldShowPokeStats && shouldShowPokeStats[name] &&
        <div>
          <img src={pokemons[name].sprites.front_default} alt='pokemons'/>
          <h5>{pokemons[name].weight}</h5>
          <h5>{pokemons[name].height}</h5>
        </div>
      }
    </Fragment>
  )
}

export default Pokemon;
