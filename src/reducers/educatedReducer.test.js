import { addEducated } from '../actions/educatedActions';
import reducer from './educatedReducer';

describe('educated reducer', () => {
  it('handles the ADD_EDUCATED action', () => {
    const state = [];
    const action = addEducated(2);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      studies: 2
    }]);
  });
});
