import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoadingDots } from './LoadingDots';
import { Button } from '../Button';

storiesOf('Components|Loading Dots', module)
  .addParameters({ component: LoadingDots })
  .add('stand alone', () => (
    <h3>
      <LoadingDots className="u-mr2" />
      System Processing
    </h3>
  ))
  .add('in flight button', () => (
    <Button onClick={action('clicked')} buttonStyle="secondary" inFlight>
      Button Text
    </Button>
  ));
