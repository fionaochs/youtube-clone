import { getHungry } from './hungrySelectors';

describe('hungry selectors', () => {
  it('gets number of snacks from state', () => {
    const state = {
      snacks: 2
    };

    const studies = getHungry(state);

    expect(studies).toEqual(
      { snacks: 2 }
    );
  });
});
