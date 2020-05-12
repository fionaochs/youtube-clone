export const ADD_TIRED = 'ADD_TIRED';
export const addTired = (coffees, naps) => ({
  type: ADD_TIRED,
  payload: {
    coffees,
    naps
  }
});
