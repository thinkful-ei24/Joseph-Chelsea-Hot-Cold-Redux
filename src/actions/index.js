export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guesses => ({
  type: ADD_GUESS,
  guesses
});

export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK';
export const changeFeedback = feedback => ({
  type: CHANGE_FEEDBACK,
  feedback
});
