import { ADD_GUESS, CHANGE_FEEDBACK } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === ADD_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guesses]
    });
  } else if (action.type === CHANGE_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  }

  return state;
};
