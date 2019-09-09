import React from 'react';
import { action } from '@storybook/addon-actions';

import { LoadingDots } from './LoadingDots';
import { Button } from '../Button';

export default {
  title: 'Design System|Loading Dots',
  component: LoadingDots
};

export const standAlone = () => (
  <h3>
    <LoadingDots className="u-mr2" />
    System Processing
  </h3>
);

standAlone.story = {
  name: 'stand alone'
};

export const inFlightButton = () => (
  <Button onClick={action('clicked')} buttonStyle="secondary" inFlight>
    Button Text
  </Button>
);

inFlightButton.story = {
  name: 'in flight button'
};
