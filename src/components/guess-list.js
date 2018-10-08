import React from 'react';
import store from '../store.js';

import './guess-list.css';

export default function GuessList(props) {
  const guesses = store
    .getState()
    .guesses.map((guess, index) => <li key={index}>{guess}</li>);

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
