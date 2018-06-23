import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchInput from '../';

describe('SearchInput Component', () => {
  let wrapper;
  const handleOnChange = jest.fn();

  it('renders the SearchInput component', () => {
    wrapper = shallow(<SearchInput query={{}} onChange={handleOnChange} />);
    expect(wrapper.length).toEqual(1);
  });

  describe('with input data', () => {
    let query = {};
    beforeEach(() => {
      query = {
        q: 'defaultSearch',
        description: 'defaultSearch',
        mediaType: 'image',
      };
    });

    it('provides props ok', () => {
      wrapper = shallow(
        <SearchInput query={query} onChange={handleOnChange} />
      );
      expect(wrapper.props().query.q).toBe('defaultSearch');
      expect(wrapper.props().query.description).toBe('defaultSearch');
      expect(wrapper.props().query.mediaType).toBe('image');
    });

    it('changes detected', () => {
      wrapper = mount(<SearchInput query={query} onChange={handleOnChange} />);
      wrapper
        .find('input')
        .at(0)
        .simulate('change');
      expect(handleOnChange).toBeCalled();
    });
  });
});
