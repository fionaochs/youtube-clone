export const ADD_HYPER = 'ADD_HYPER';
export const addHyper = (coffees) => ({
  type: ADD_HYPER,
  payload: {
    coffees
  }
});
