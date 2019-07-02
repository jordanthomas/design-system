import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';

import { Icon } from './Icon';

setAddon(JSXAddon);

storiesOf('Loading Dots', module)
  .addWithJSX(
    'stand alone',
    () => (
      <div className="u-p8">
        <Icon icon="heart" />
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'in flight button',
    () => (
      <div className="u-p8">
        <Icon icon="trophy" />
      </div>
    ),
    { skip: 1 }
  );
