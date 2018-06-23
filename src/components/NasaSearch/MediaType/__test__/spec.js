import React from 'react';
import { shallow, mount } from 'enzyme';

import MediaType from '../';

describe('MediaType Component', () => {
  let wrapper;
  const handleOnChange = jest.fn();

  it('renders the MediaType component', () => {
    wrapper = shallow(
      <MediaType checkedImages checkedAudios onChange={handleOnChange} />
    );
    expect(wrapper.length).toEqual(1);
  });

  describe('with input data', () => {
    const checkedImages = true;
    const checkedAudios = false;

    it('provides props ok', () => {
      wrapper = shallow(
        <MediaType
          checkedImages={checkedImages}
          checkedAudios={checkedAudios}
          onChange={handleOnChange}
        />
      );
      expect(wrapper.props().checkedImages).toBe(true);
      expect(wrapper.props().checkedAudios).toBe(false);
      expect(wrapper.props().onChange).toBe(handleOnChange);
    });

    it('changes detected', () => {
      wrapper = mount(
        <MediaType
          checkedImages={checkedImages}
          checkedAudios={checkedAudios}
          onChange={handleOnChange}
        />
      );
      wrapper
        .find('input')
        .at(0)
        .simulate('change');
      expect(handleOnChange).toBeCalled();
    });
  });
});
