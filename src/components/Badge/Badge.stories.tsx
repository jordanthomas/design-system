import React from 'react';

import { Badge } from './Badge';

export default {
  title: 'Design System|Badge',
  component: Badge
};

export const status = () => (
  <>
    <Badge className="u-mr2">Badge Text</Badge>
    <Badge status="neutral" className="u-mr2">
      Badge Text
    </Badge>
    <Badge status="positive" className="u-mr2">
      Badge Text
    </Badge>
    <Badge status="warning" className="u-mr2">
      Badge Text
    </Badge>
    <Badge status="negative">Badge Text</Badge>
  </>
);

status.story = {
  name: 'status'
};

export const withTooltip = () => (
  <>
    <Badge infoTooltip="This is the tooltip text" className="u-mr2">
      Badge Text
    </Badge>
    <Badge
      status="neutral"
      infoTooltip="This is the tooltip text"
      className="u-mr2"
    >
      Badge Text
    </Badge>
    <Badge
      status="positive"
      infoTooltip="This is the tooltip text"
      className="u-mr2"
    >
      Badge Text
    </Badge>
    <Badge
      status="warning"
      infoTooltip="This is the tooltip text"
      className="u-mr2"
    >
      Badge Text
    </Badge>
    <Badge status="negative" infoTooltip="This is the tooltip text">
      Badge Text
    </Badge>
  </>
);

withTooltip.story = {
  name: 'with info tooltip'
};
