import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getPokemon, getShouldShowPokeStats } from './reducers';
import Pokemon from './pokemon';
import { fetchPokemon } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPokemon())
  }

  render() {
    const { pokemons, dispatch, shouldShowPokeStats } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokemon</h1>
        </header>
        <div className="App-intro">
          {pokemons.results && pokemons.results.map((pokemon) => {
            return <Pokemon
               key={pokemon.name}
               dispatch={dispatch}
               shouldShowPokeStats={shouldShowPokeStats}
               pokemons={pokemons}
               pokemon={pokemon}
            />
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pokemons: getPokemon(state),
    shouldShowPokeStats: getShouldShowPokeStats(state)
  }
}
export default connect(mapStateToProps)(App);
