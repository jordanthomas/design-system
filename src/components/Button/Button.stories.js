import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';

import { withReadme } from 'storybook-readme';

import { Button } from './Button';

import ButtonREADME from './README.md';

setAddon(JSXAddon);

storiesOf('Button', module)
  .addDecorator(withReadme(ButtonREADME))
  .addWithJSX(
    'sizes',
    () => (
      <div className="u-p8">
        <Button
          onClick={action('clicked')}
          buttonSize="extra-sm"
          buttonStyle="secondary"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button
          onClick={action('clicked')}
          buttonSize="sm"
          buttonStyle="secondary"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button
          onClick={action('clicked')}
          buttonStyle="secondary"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button
          onClick={action('clicked')}
          buttonSize="lg"
          buttonStyle="secondary"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button
          onClick={action('clicked')}
          buttonSize="xl"
          buttonStyle="secondary"
        >
          Button Text
        </Button>
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'styles',
    () => (
      <div className="u-p8">
        <Button
          onClick={action('clicked')}
          buttonStyle="primary"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button
          onClick={action('clicked')}
          buttonStyle="primary-important"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button onClick={action('clicked')} buttonStyle="primary-danger">
          Button Text
        </Button>
        <br />
        <br />
        <Button
          onClick={action('clicked')}
          buttonStyle="secondary"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button
          onClick={action('clicked')}
          buttonStyle="secondary-important"
          className="u-mr2"
        >
          Button Text
        </Button>
        <Button onClick={action('clicked')} buttonStyle="secondary-danger">
          Button Text
        </Button>
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'in flight',
    () => (
      <div className="u-p8">
        <Button onClick={action('clicked')} buttonStyle="secondary" inFlight>
          Button Text
        </Button>
      </div>
    ),
    { skip: 1 }
  );
