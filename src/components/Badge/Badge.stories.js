import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withReadme } from 'storybook-readme';

import { Badge } from './Badge';

import BadgeREADME from './README.md';

setAddon(JSXAddon);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Badge', module)
  .addDecorator(withReadme(BadgeREADME))
  .addWithJSX(
    'styles',
    () => (
      <div className="u-p8">
        <Badge className="u-mr2">Badge Text</Badge>
        <Badge badgeStyle="danger" className="u-mr2">
          Badge Text
        </Badge>
        <Badge badgeStyle="success" className="u-mr2">
          Badge Text
        </Badge>
        <Badge badgeStyle="dark">Badge Text</Badge>
      </div>
    ),
    { skip: 1 }
  );
