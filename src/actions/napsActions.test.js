import { addTired, ADD_TIRED } from './tiredActions';

describe('tired action', () => {
  it('creates a tired action', () => {
    const action = addTired(2, 1);

    expect(action).toEqual({
      type: ADD_TIRED,
      payload: {
        coffees: 2,
        naps: 1
      }
    });
  });
});
