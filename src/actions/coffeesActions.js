export const ADD_COFFEES = 'ADD_COFFEES';
export const addCoffees = (coffees) => ({
  type: ADD_COFFEES,
  payload: {
    coffees
  }
});
