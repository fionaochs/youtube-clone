export const ADD_EDUCATED = 'ADD_EDUCATED';
export const addEducated = (studies) => ({
  type: ADD_EDUCATED,
  payload: {
    studies
  }
});
