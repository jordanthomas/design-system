// @flow

import { shallow } from 'enzyme';
import React from 'react';

import Badge from './Badge';

describe('<Badge />', () => {
  describe('Badge content', () => {
    it('yields the content provided', () => {
      const wrapper = shallow(
        <Badge>
          Sheriff
        </Badge>
      );
      expect(wrapper.text()).toEqual('Sheriff');
    });
  });

  describe('Badge style', () => {
    it('uses the default if nothing is provided', () => {
      const wrapper = shallow(
        <Badge>
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge');
    });

    it('renders the badge with the provided style class', () => {
      const wrapper = shallow(
        <Badge badgeStyle="danger">
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge badge--danger');
    });

    it('renders the badge with the provided size class', () => {
      const wrapper = shallow(
        <Badge badgeSize="mini">
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge badge--mini');
    });

    it('renders the badge with the provided combination of classes', () => {
      const wrapper = shallow(
        <Badge badgeStyle="danger" badgeSize="mini" className="another-class and-another">
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge badge--mini badge--danger another-class and-another');
    });
  });
});
