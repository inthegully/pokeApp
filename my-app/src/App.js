import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchPokemon, fetchAPokemon } from './actions';
import { getPokemon, getShouldShowPokeStats } from './reducers';

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
            const { name, url } = pokemon
            console.log(name)
            return <Fragment key={name}>
              <h3 onClick={() => dispatch(fetchAPokemon(url, name))}>
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
