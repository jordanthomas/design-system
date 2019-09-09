import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from '../Icon';

export default {
  title: 'Design System|Button',
  component: Button
};

export const styles = () => (
  <>
    <Button onClick={action('clicked')} buttonStyle="primary" className="u-mr2">
      Primary
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="secondary"
      className="u-mr2"
    >
      Secondary
    </Button>
    <Button onClick={action('clicked')} buttonStyle="text" className="u-mr2">
      Text
    </Button>
    <br />
    <br />
    <Button
      onClick={action('clicked')}
      buttonStyle="primary-important"
      className="u-mr2"
    >
      Primary Important
    </Button>
    <br />
    <br />
    <Button
      onClick={action('clicked')}
      buttonStyle="primary-contrast"
      className="u-mr2"
    >
      Primary Contrast
    </Button>
    <br />
    <br />
    <Button
      onClick={action('clicked')}
      buttonStyle="primary-facebook"
      className="u-mr2"
    >
      Primary Facebook
    </Button>
    <br />
    <br />
    <Button
      onClick={action('clicked')}
      buttonStyle="primary-danger"
      className="u-mr2"
    >
      Primary Danger
    </Button>
    <Button onClick={action('clicked')} buttonStyle="secondary-danger">
      Secondary Danger
    </Button>
    <br />
    <br />
    <Button onClick={action('clicked')} buttonStyle="text-navigation">
      Text Navigation
    </Button>
  </>
);

styles.story = {
  name: 'styles'
};

export const sizes = () => (
  <>
    <Button
      onClick={action('clicked')}
      buttonSize="extra-sm"
      buttonStyle="secondary"
      className="u-mr2"
    >
      Size - Extra Sm
    </Button>
    <Button
      onClick={action('clicked')}
      buttonSize="sm"
      buttonStyle="secondary"
      className="u-mr2"
    >
      Size - Sm
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="secondary"
      className="u-mr2"
    >
      Normal
    </Button>
    <Button
      onClick={action('clicked')}
      buttonSize="lg"
      buttonStyle="secondary"
      className="u-mr2"
    >
      Size - Lg
    </Button>
    <Button onClick={action('clicked')} buttonSize="xl" buttonStyle="secondary">
      Size - Xl
    </Button>
  </>
);

sizes.story = {
  name: 'sizes'
};

export const withIcon = () => (
  <>
    <Button
      onClick={action('clicked')}
      buttonStyle="secondary"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
      Button Text
    </Button>
    <Button onClick={action('clicked')} buttonStyle="secondary">
      Button Text
      <Icon icon="heart" className="btn__icon btn__icon--right" />
    </Button>
  </>
);

withIcon.story = {
  name: 'with icon'
};

export const display = () => (
  <>
    <Button
      onClick={action('clicked')}
      buttonStyle="primary"
      buttonDisplay="icon-only"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="secondary"
      buttonDisplay="icon-only"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="text"
      buttonDisplay="icon-only"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
    </Button>
    Icon Only
    <br />
    <br />
    <Button
      onClick={action('clicked')}
      buttonStyle="primary"
      buttonDisplay="icon-only-circle"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="secondary"
      buttonDisplay="icon-only-circle"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="text"
      buttonDisplay="icon-only-circle"
      className="u-mr2"
    >
      <Icon icon="heart" className="btn__icon" />
    </Button>
    Icon Only Circle
    <br />
    <br />
    <Button
      onClick={action('clicked')}
      buttonStyle="primary"
      buttonDisplay="block"
    >
      Block
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="secondary"
      buttonDisplay="block"
      className="u-mt2"
    >
      Block
    </Button>
    <Button
      onClick={action('clicked')}
      buttonStyle="text"
      buttonDisplay="block"
      className="u-mt2"
    >
      Block
    </Button>
    <br />
    <p>
      A button can also be{' '}
      <Button onClick={action('clicked')} buttonDisplay="link">
        an inline link
      </Button>
      .
    </p>
  </>
);

display.story = {
  name: 'display'
};

export const inFlight = () => (
  <Button onClick={action('clicked')} buttonStyle="secondary" inFlight>
    Button Text
  </Button>
);

inFlight.story = {
  name: 'in flight'
};
