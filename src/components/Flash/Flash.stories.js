import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withReadme } from 'storybook-readme';

import { Flash } from './Flash';
import flashREADME from './README.md';

setAddon(JSXAddon);

storiesOf('Flash', module)
  .addDecorator(withReadme(flashREADME))
  .addWithJSX(
    'styles',
    () => (
      <div className="u-p8">
        <Flash>This is a Flash message</Flash>
        <Flash flashStyle="warn" className="u-mt2">
          This is a Flash warning message
        </Flash>
        <Flash flashStyle="error" className="u-mt2">
          This is a Flash error message
        </Flash>
        <Flash flashStyle="success" className="u-mt2">
          This is a Flash success message
        </Flash>
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'with heading',
    () => (
      <div className="u-p8">
        <Flash heading="Flash Heading">This is a Flash message</Flash>
        <Flash heading="Flash Heading" flashStyle="warn" className="u-mt2">
          This is a Flash warning message
        </Flash>
        <Flash heading="Flash Heading" flashStyle="error" className="u-mt2">
          This is a Flash error message
        </Flash>
        <Flash heading="Flash Heading" flashStyle="success" className="u-mt2">
          This is a Flash success message
        </Flash>
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'with icon',
    () => (
      <div className="u-p8">
        <Flash showIcon>This is a Flash message with icon</Flash>
        <Flash showIcon flashStyle="warn" className="u-mt2">
          This is a Flash warning message with icon
        </Flash>
        <Flash showIcon flashStyle="error" className="u-mt2">
          This is a Flash error message with icon
        </Flash>
        <Flash showIcon flashStyle="success" className="u-mt2">
          This is a Flash success message with icon
        </Flash>
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'with heading + icon',
    () => (
      <div className="u-p8">
        <Flash heading="Flash Heading" showIcon>
          This is a Flash message
        </Flash>
        <Flash
          heading="Flash Heading"
          showIcon
          flashStyle="warn"
          className="u-mt2"
        >
          This is a Flash warning message
        </Flash>
        <Flash
          heading="Flash Heading"
          showIcon
          flashStyle="error"
          className="u-mt2"
        >
          This is a Flash error message
        </Flash>
        <Flash
          heading="Flash Heading"
          showIcon
          flashStyle="success"
          className="u-mt2"
        >
          This is a Flash success message
        </Flash>
      </div>
    ),
    { skip: 1 }
  );
