import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withReadme } from 'storybook-readme';

import { Tooltip } from './Tooltip';
import { Badge } from '../Badge';

import TooltipREADME from './README.md';

setAddon(JSXAddon);

storiesOf('Tooltip', module)
  .addDecorator(withReadme(TooltipREADME))
  .addWithJSX(
    'styles',
    () => (
      <div className="u-p8">
        <Tooltip content="Tooltip">
          <span>This text has a Tooltip</span>
        </Tooltip>
      </div>
    ),
    { skip: 1 }
  );
