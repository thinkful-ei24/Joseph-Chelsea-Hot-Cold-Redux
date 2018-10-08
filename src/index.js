import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider } from 'react-redux';
import { addGuess } from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

// store.dispatch(addGuess(10));

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
