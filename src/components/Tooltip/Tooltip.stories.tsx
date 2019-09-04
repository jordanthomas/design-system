import React from 'react';

import { Tooltip } from './Tooltip';
import { Icon } from '../Icon';

export default {
  title: 'Components|Tooltip',
  component: Tooltip
};

export const usage = () => (
  <>
    This statement needs further explanation
    <Tooltip content="Tooltip that gives an explanation">
      <Icon icon="info" size="18" className="u-ml1 u-text-muted" />
    </Tooltip>
  </>
);

usage.story = {
  name: 'usage'
};
