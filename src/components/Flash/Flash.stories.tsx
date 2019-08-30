import React from 'react';
import { storiesOf } from '@storybook/react';

import { Flash } from './Flash';

storiesOf('Components|Flash', module)
  .addParameters({ component: Flash })
  .add('styles', () => (
    <>
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
    </>
  ))
  .add('with heading', () => (
    <>
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
    </>
  ))
  .add('with icon', () => (
    <>
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
    </>
  ))
  .add('with heading + icon', () => (
    <>
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
    </>
  ));
