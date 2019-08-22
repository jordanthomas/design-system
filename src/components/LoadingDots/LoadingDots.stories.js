import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoadingDots } from './LoadingDots';
import { Button } from '../Button';

storiesOf('Components|Loading Dots', module)
  .add(
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
  .add(
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
