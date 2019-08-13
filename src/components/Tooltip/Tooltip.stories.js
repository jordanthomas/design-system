import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withReadme } from 'storybook-readme';

import { Tooltip } from './Tooltip';
import { Icon } from '../Icon';

import TooltipREADME from './README.md';

setAddon(JSXAddon);

storiesOf('Components|Tooltip', module)
  .addDecorator(withReadme(TooltipREADME))
  .addWithJSX(
    'usage',
    () => (
      <div className="u-p8">
        This statement needs further explanation
        <Tooltip content="Tooltip that gives an explanation">
          <Icon icon="info" size="18" className="u-ml1 u-text-muted" />
        </Tooltip>
      </div>
    ),
    { skip: 1 }
  );
