import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokeApp from './reducers';

// builds redux store
function configureStore(preloadedState) {
  return createStore(
    pokeApp,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk
      )
    )
  )
}
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
