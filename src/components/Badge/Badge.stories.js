import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Badge } from './Badge';
import BadgeREADME from './README.md';

storiesOf('Components|Badge', module)
  .addParameters({ component: Badge })
  .addDecorator(withReadme(BadgeREADME))
  .add(
    'status',
    () => (
      <div className="u-p8">
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
      </div>
    ),
    { skip: 1 }
  )
  .add(
    'with info tooltip',
    () => (
      <div className="u-p8">
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
      </div>
    ),
    { skip: 1 }
  );
