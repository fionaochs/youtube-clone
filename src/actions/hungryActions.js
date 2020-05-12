export const ADD_HUNGRY = 'ADD_HUNGRY';
export const addHungry = (snacks) => ({
  type: ADD_HUNGRY,
  payload: {
    snacks
  }
});
