import React from 'react';
import { shallow } from 'enzyme';
import Moods from '../../containers/Moods';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Moods />);
    expect(wrapper).toMatchSnapshot();
  });
});
