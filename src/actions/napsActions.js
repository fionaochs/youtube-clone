export const ADD_NAPS = 'ADD_NAPS';
export const addNaps = (naps) => ({
  type: ADD_NAPS,
  payload: {
    naps
  }
});
