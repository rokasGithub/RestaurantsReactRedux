import React from 'react';
import { shallow } from 'enzyme';
import City from './index';

import { findByTestAtrr, checkProps, testStore } from './../../../Utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<City store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('Headline Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { text: 'rokas' };
    wrapper = setUp(initialState);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {};
      const propsErr = checkProps(wrapper, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    beforeEach(() => {
      const props = { text: 'rokas' };
      wrapper = setUp(props);
    });

    it('Should render form withount errors', () => {
      const form = findByTestAtrr(wrapper, 'FormComponent');
      expect(form.length).toBe(1);
    });

    it('Should render a input for searching', () => {
      const input = findByTestAtrr(wrapper, 'InputSearch');
      expect(input.length).toBe(1);
    });

    it('Should render a search button', () => {
      const button = findByTestAtrr(wrapper, 'ButtonComponent');
      expect(button.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
