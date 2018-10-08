export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guesses => ({
  type: ADD_GUESS,
  guesses
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});
