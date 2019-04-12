import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

storiesOf('Home', module)
  .addWithJSX('styles', () => (
    <div className="u-p8">
      <h1>EBTH Design System</h1>
    </div>
  ), { skip: 1 });
