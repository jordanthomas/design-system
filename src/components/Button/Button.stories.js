import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Button } from './Button';
import { Icon } from '../Icon';
import ButtonREADME from './README.md';

storiesOf('Components|Button', module)
  .addParameters({ component: Button })
  .addDecorator(withReadme(ButtonREADME))
  .add('styles', () => (
    <>
      <Button
        onClick={action('clicked')}
        buttonStyle="primary"
        className="u-mr2"
      >
        Primary
      </Button>
      <Button
        onClick={action('clicked')}
        buttonStyle="secondary"
        className="u-mr2"
      >
        Secondary
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
      <Button onClick={action('clicked')} buttonStyle="navigation">
        Navigation
      </Button>
    </>
  ))
  .add('sizes', () => (
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
      <Button
        onClick={action('clicked')}
        buttonSize="xl"
        buttonStyle="secondary"
      >
        Size Xl
      </Button>
    </>
  ))
  .add('with icon', () => (
    <Button onClick={action('clicked')} buttonStyle="secondary">
      <Icon icon="heart" className="btn__icon" />
      Button Text
    </Button>
  ))
  .add('display', () => (
    <>
      <Button
        onClick={action('clicked')}
        buttonStyle="primary"
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
      Icon Only Circle
      <br />
      <br />
      <Button
        onClick={action('clicked')}
        buttonStyle="secondary"
        buttonDisplay="block"
      >
        Block
      </Button>
    </>
  ))
  .add('in flight', () => (
    <Button onClick={action('clicked')} buttonStyle="secondary" inFlight>
      Button Text
    </Button>
  ));
