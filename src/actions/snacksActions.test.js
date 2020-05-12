import { addHungry, ADD_HUNGRY } from './hungryActions';

describe('hungry action', () => {
  it('creates a hungry action', () => {
    const action = addHungry(2);

    expect(action).toEqual({
      type: ADD_HUNGRY,
      payload: {
        snacks: 2
      }
    });
  });
});
