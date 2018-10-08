import React from 'react';
import store from '../store.js';
import { connect } from 'react-redux';

import './guess-list.css';

export function GuessList(props) {
  const guesses = store
    .getState()
    .guesses.map((guess, index) => <li key={index}>{guess}</li>);

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);
