export const ADD_CHIPS = 'ADD_CHIPS';
export const removeChips = chip => ({
  type: REMOVE_CHIPS,
  payload: chip
});

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const addChips = chip => ({
  type: ADD_CHIPS,
  payload: chip
});

export const ADD_DRINKS = 'ADD_DRINKS';
export const addDrinks = drink => ({
  type: ADD_DRINKS,
  payload: drink
});

export const REMOVE_DRINKS = 'REMOVE_DRINKS';
export const removeDrinks = drink => ({
  type: REMOVE_DRINKS,
  payload: drink
});


