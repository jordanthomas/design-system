import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Icon } from '../Icon';

storiesOf('Components|Tooltip', module)
  .addParameters({ component: Tooltip })
  .add('usage', () => (
    <>
      This statement needs further explanation
      <Tooltip content="Tooltip that gives an explanation">
        <Icon icon="info" size="18" className="u-ml1 u-text-muted" />
      </Tooltip>
    </>
  ));
