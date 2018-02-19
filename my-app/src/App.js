import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchPokemon } from './actions';
import { getPokemon } from './reducers';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPokemon())
  }

  render() {
    const { pokemon } = this.props
    console.log(pokemon)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokemon</h1>
        </header>
        <p className="App-intro">
          {pokemon.results && pokemon.results.map((pokemon) => {
            return <h1>{pokemon.name}</h1>
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
