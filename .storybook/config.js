import { addParameters, configure } from '@storybook/react';
import 'loki/configure-react';
import ebthTheme from './ebthTheme';

import './assets/stylesheets/storybook.scss';

addParameters({
  options: {
    theme: ebthTheme,
  },
});

const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  // Home page
  require("./home");
  // automatically import all files ending in *.stories.js
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
