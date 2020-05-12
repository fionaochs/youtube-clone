import { addHyper, ADD_HYPER } from './hyperActions';

describe('hyper action', () => {
  it('creates a hyper action', () => {
    const action = addHyper(3);

    expect(action).toEqual({
      type: ADD_HYPER,
      payload: {
        coffees: 3
      }
    });
  });
});
