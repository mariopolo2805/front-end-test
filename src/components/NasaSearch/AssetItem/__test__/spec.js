import React from 'react';
import { shallow } from 'enzyme';

import AssetItem from '../';

describe('AssetItem Component', () => {
  let wrapper;

  it('renders the AssetItem component', () => {
    wrapper = shallow(<AssetItem data={{}} />);
    expect(wrapper.length).toEqual(1);
  });

  it('provides props ok', () => {
    const mockData = {
      title: 'title',
    };
    wrapper = shallow(<AssetItem data={mockData} />);
    expect(wrapper.props().data).toBe(mockData);
  });
});
