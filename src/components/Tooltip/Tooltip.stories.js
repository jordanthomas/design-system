import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Tooltip } from './Tooltip';
import { Icon } from '../Icon';
import TooltipREADME from './README.md';

storiesOf('Components|Tooltip', module)
  .addDecorator(withReadme(TooltipREADME))
  .add(
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
