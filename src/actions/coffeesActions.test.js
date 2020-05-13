import { addCoffees, ADD_COFFEES } from './coffeesActions';

describe('coffees action', () => {
  it('creates a coffees action', () => {
    const action = addCoffees(3);

    expect(action).toEqual({
      type: ADD_COFFEES,
      payload: {
        coffees: 3
      }
    });
  });
});
