import { addEducated, ADD_EDUCATED } from './educatedActions';

describe('educated action', () => {
  it('creates an educated action', () => {
    const action = addEducated(2);

    expect(action).toEqual({
      type: ADD_EDUCATED,
      payload: {
        studies: 2
      }
    });
  });
});
