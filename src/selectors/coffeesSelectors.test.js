import { getHyper } from './hyperSelectors';

describe('hyper selectors', () => {
  it('gets number of coffees from state', () => {
    const state = {
      coffees: 2
    };

    const coffees = getHyper(state);

    expect(coffees).toEqual(
      { coffees: 2 }
    );
  });
});
