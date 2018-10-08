import { ADD_GUESS, RESET_GAME } from '../actions';

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
      feedback: feedback
    });
  } else if (action.type === RESET_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  return state;
};
