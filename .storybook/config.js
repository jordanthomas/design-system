import { addParameters, configure } from '@storybook/react';
import 'loki/configure-react';
import ebthTheme from './ebthTheme';

import './assets/stylesheets/storybook.scss';

addParameters({
  options: {
    panelPosition: 'right',
    theme: ebthTheme,
  },
});

const req = require.context('../src/components', true, /\.stories\.(js|ts|tsx|mdx)$/);
function loadStories() {
  // Home page
  require("./foundation.stories");
  // automatically import all files ending in *.stories.js
  req.keys().forEach(filename => req(filename));
  require("./utility.stories");
}

configure(loadStories, module);
