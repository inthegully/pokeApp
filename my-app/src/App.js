import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchPokemon, fetchAPokemon } from './actions';
import { getPokemon } from './reducers';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPokemon())
  }

  render() {
    const { pokemon, dispatch } = this.props
    console.log(pokemon)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokemon</h1>
        </header>
        <p className="App-intro">
          {pokemon.results && pokemon.results.map((pokemon) => {
            return <h3 onClick={() => dispatch(fetchAPokemon(pokemon.url, pokemon.name))}>{pokemon.name}</h3>
          })}
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pokemon: getPokemon(state)
  }
}
export default connect(mapStateToProps)(App);
