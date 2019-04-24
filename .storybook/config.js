import { addParameters, configure } from '@storybook/react';
import ebthTheme from './ebthTheme';

addParameters({
  options: {
    theme: ebthTheme,
  },
});

const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  // Home page
  require("./home");
  // automatically import all files ending in *.stories.js
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
