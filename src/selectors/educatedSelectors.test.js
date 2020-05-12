import { getEducated } from './educatedSelectors';

describe('educated selectors', () => {
  it('gets number of studies from state', () => {
    const state = {
      studies: 2
    };

    const studies = getEducated(state);

    expect(studies).toEqual(
      { studies: 2 }
    );
  });
});
