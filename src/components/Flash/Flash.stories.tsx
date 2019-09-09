import React from 'react';

import { Flash } from './Flash';

export default {
  title: 'Design System|Flash',
  component: Flash
};

export const styles = () => (
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
);

styles.story = {
  name: 'styles'
};

export const withHeading = () => (
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
);

withHeading.story = {
  name: 'with heading'
};

export const withIcon = () => (
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
);

withIcon.story = {
  name: 'with icon'
};

export const withHeadingAndIcon = () => (
  <>
    <Flash heading="Flash Heading" showIcon>
      This is a Flash message
    </Flash>
    <Flash heading="Flash Heading" showIcon flashStyle="warn" className="u-mt2">
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
);

withHeadingAndIcon.story = {
  name: 'with heading + icon'
};
