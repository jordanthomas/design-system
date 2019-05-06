# EBTH's Design System

[![CircleCI](https://circleci.com/gh/ebth/design-system.svg?style=shield&circle-token=9bcd48684d05cc04147edccac73f1c8a2c79e112)](https://circleci.com/gh/ebth/design-system)
[![npm version](https://badge.fury.io/js/%40ebth%2Fdesign-system.svg)](https://badge.fury.io/js/%40ebth%2Fdesign-system)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e8abf313-7dfd-4ac7-98ea-3e9f5bfc19c2/deploy-status)](https://app.netlify.com/sites/ebth-design/deploys)

UI Component library and style helper mixins for SCSS.

## Usage

1. Install library

   ```bash
   // with npm
   npm install @ebth/design-system

   // with yarn
   yarn add @ebth/design-system
   ```

1. Import components

   ```tsx
   import * as React from 'react';
   import { Button } from '@ebth/design-system';

   interface IProps {
     label: string;
   }

   export const MyButton: React.SFC<IProps> = ({ label }) => (
     <Button>{label}</Button>
   );
   ```

1. Import shared utility classes

   ```scss
   @import '@ebth/design-system/dist/utility';
   ```

### Creating your own components

1. Define your styles

   ```scss
   // import base utility mixins and variables
   @import '@ebth/design-system/dist/base';

   .my-button {
     background-color: $green-300;
     color: $text-color;
   }
   ```

1. Create your component

   ```tsx
   import * as React from 'react';
   import { Button } from '@ebth/design-system';

   interface IProps {
     label: string;
   }

   export const MyButton: React.SFC<IProps> = ({ label }) => (
     <Button className="my-button">{label}</Button>
   );
   ```

## Contributing

1. Fork or clone this repo
1. Install dependencies (`yarn install`)
1. Use Prettier and SassLint linters
1. Use Editorconfig
1. Start the development watch process (`yarn dev`)
   - Starts storybook server
   - Rebuild distributable on changes
   - Run Jest tests on changes
1. Modify whatever you need

If you want to work on this library while consuming it in another project you can use `yarn link` like so:

1. Link this project `yarn link`
1. Start development watch process `yarn dev`
1. Use the link in your project `yarn link @ebth/design-system`
   - Run this in your project's folder
   - If you use Flowtype you may [lose typing hints](https://github.com/facebook/flow/issues/4015).
