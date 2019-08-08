import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';

import { LoadingDots } from './LoadingDots';
import { Button } from '../Button';

setAddon(JSXAddon);

storiesOf('Components|Loading Dots', module)
  .addWithJSX(
    'stand alone',
    () => (
      <div className="u-p8">
        <h3>
          <LoadingDots className="u-mr2" />
          System Processing
        </h3>
      </div>
    ),
    { skip: 2 }
  )
  .addWithJSX(
    'in flight button',
    () => (
      <div className="u-p8">
        <Button onClick={action('clicked')} buttonStyle="secondary" inFlight>
          Button Text
        </Button>
      </div>
    ),
    { skip: 1 }
  );
