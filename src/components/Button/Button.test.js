// @flow

import { shallow } from 'enzyme';
import React from 'react';

import { Button } from './Button';

describe('<Button />', () => {
  describe('Cutton content', () => {
    it('yields the content provided', () => {
      const wrapper = shallow(<Button>Easy</Button>);
      expect(wrapper.text()).toEqual('Easy');
    });
  });

  describe('Button style', () => {
    it('uses the default if nothing is provided', () => {
      const wrapper = shallow(<Button>Easy</Button>);
      expect(wrapper.prop('className')).toEqual('btn');
    });

    it('renders the button with the provided display class', () => {
      const wrapper = shallow(<Button buttonDisplay="block">Easy</Button>);
      expect(wrapper.prop('className')).toEqual('btn btn--block');
    });

    it('renders the button with the provided style class', () => {
      const wrapper = shallow(<Button buttonStyle="secondary">Easy</Button>);
      expect(wrapper.prop('className')).toEqual('btn btn--secondary');
    });

    it('renders the button with the provided size class', () => {
      const wrapper = shallow(<Button buttonSize="xl">Easy</Button>);
      expect(wrapper.prop('className')).toEqual('btn btn--xl');
    });

    it('renders the button with the provided combination of classes', () => {
      const wrapper = shallow(
        <Button
          buttonDisplay="block"
          buttonStyle="secondary"
          buttonSize="xl"
          className="another-class and-another"
        >
          Easy
        </Button>
      );
      expect(wrapper.prop('className')).toEqual(
        'btn btn--block btn--xl btn--secondary another-class and-another'
      );
    });
  });

  describe('Waiting on async process', () => {
    it('is disabled and has loading dots when in flight', () => {
      const wrapper = shallow(<Button inFlight>Easy</Button>);
      expect(wrapper.prop('className')).toEqual('btn');
      expect(wrapper.prop('disabled')).toEqual(true);
      expect(wrapper.find('LoadingDots')).toHaveLength(1);
    });
  });

  describe('Disabling the button', () => {
    it('is not disabled by default', () => {
      const wrapper = shallow(<Button>Easy</Button>);
      expect(wrapper.prop('disabled')).toBeFalsy();
    });

    it('is disabled if flag is passed in', () => {
      const wrapper = shallow(<Button disabled>Easy</Button>);
      expect(wrapper.prop('disabled')).toEqual(true);
    });
  });
});
