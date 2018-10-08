import { ADD_GUESS, RESET_GAME, GENERATE_AURAL_UPDATE } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === ADD_GUESS) {
    let guess = parseInt(action.guesses, 10);
    if (isNaN(guess)) {
      Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = 'You got it!';
    }

    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guesses],
      feedback
    });
  } else if (action.type === RESET_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  } else if (action.type === GENERATE_AURAL_UPDATE) {
    const { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${
      guesses.length
    } ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${
        pluralize ? 'In order of most- to least-recent, they are' : 'It was'
      }: ${guesses.reverse().join(', ')}`;
    }
    return Object.assign({}, state, { auralStatus });
  }
  return state;
};
