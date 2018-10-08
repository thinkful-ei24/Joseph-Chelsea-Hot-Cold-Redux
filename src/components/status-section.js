import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';
import store from '../store';

export default function StatusSection(props) {
  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={store.getState().guesses.length} />
      <GuessList guesses={store.getState().guesses} />
      <AuralStatus auralStatus={store.getState().auralStatus} />
    </section>
  );
}
