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
        <Badge status="neutral" className="u-mr2">
          Badge Text
        </Badge>
        <Badge status="positive" className="u-mr2">
          Badge Text
        </Badge>
        <Badge status="negative">Badge Text</Badge>
      </div>
    ),
    { skip: 1 }
  );
