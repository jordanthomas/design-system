import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'EBTH',
  url: '/',
});

const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  // Home page
  require("./home");
  // automatically import all files ending in *.stories.js
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
