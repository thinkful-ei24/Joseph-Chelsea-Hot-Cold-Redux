import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import store from '../store';

export default function GuessSection(props) {
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback
        feedback={store.getState().feedback}
        guessCount={store.getState().guesses.length}
      />
      <GuessForm />
    </section>
  );
}
