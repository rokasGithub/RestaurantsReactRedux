import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some text',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        name: 'Example Title',
        address: 'Some text',
        price: '5',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should renders without error', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'componentRating');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        newVar: 'Some text',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
