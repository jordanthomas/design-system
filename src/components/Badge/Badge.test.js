// @flow

import { shallow } from 'enzyme';
import React from 'react';

import { Badge } from './Badge';

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
        <Badge status="negative">
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge badge--negative');
    });

    it('renders the badge with the provided size class', () => {
      const wrapper = shallow(
        <Badge size="mini">
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge badge--mini');
    });

    it('renders the badge with the provided combination of classes', () => {
      const wrapper = shallow(
        <Badge status="negative" size="mini" className="another-class and-another">
          Sheriff
        </Badge>
      );
      expect(wrapper.prop('className')).toEqual('badge badge--mini badge--negative another-class and-another');
    });
  });
});
