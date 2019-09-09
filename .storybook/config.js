import { addParameters, configure } from '@storybook/react';
import 'loki/configure-react';
import ebthTheme from './ebthTheme';

import './assets/stylesheets/storybook.scss';

addParameters({
  options: {
    theme: ebthTheme
  }
});

configure(
  [
    require.context('./', false, /intro\.stories\.mdx/),
    require.context('./', false, /foundation\.stories\.mdx/),
    require.context('../src/components', true, /\.stories\.(js|ts|tsx|mdx)$/)
  ],
  module
);
