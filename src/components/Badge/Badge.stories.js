import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components|Badge',
  component: Badge,
};

export const allBadges = () => (
  <div className="u-p4">
    <Badge>No status</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="positive">Positive</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="positive" infoTooltip="This is the tooltip text">
      with info
    </Badge>
  </div>
);
allBadges.story = {
  name: 'all badges',
};

export const withInfo = () => (
  <div className="u-p4">
    <Badge infoTooltip="This is the tooltip text">No status w/ info</Badge>
    <Badge status="neutral" infoTooltip="This is the tooltip text">Neutral w/ info</Badge>
    <Badge status="positive" infoTooltip="This is the tooltip text">Positive w/ info</Badge>
    <Badge status="warning" infoTooltip="This is the tooltip text">Warning w/ info</Badge>
    <Badge status="negative" infoTooltip="This is the tooltip text">Negative w/ info</Badge>
  </div>
);
withInfo.story = {
  name: 'with info tooltip',
};
