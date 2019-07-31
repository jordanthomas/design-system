import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withReadme } from 'storybook-readme';

import { Icon } from './Icon';
import IconREADME from './README.md';

setAddon(JSXAddon);

storiesOf('Icon', module)
  .addDecorator(withReadme(IconREADME))
  .addWithJSX(
    'heart',
    () => (
      <div className="u-p8">
        <Icon icon="heart" accessibilityLabel="Follow" />
      </div>
    ),
    { skip: 1 }
  );
