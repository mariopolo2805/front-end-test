import React from 'react';
import { shallow } from 'enzyme';

import App from '../';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the App component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
