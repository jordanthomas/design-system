import { extname } from 'path';
import { readFileSync } from 'fs';
import { parseString } from 'xml2js';

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import flowEntry from 'rollup-plugin-flow-entry';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

// so this node-sass import actually does nothing
// but i'm leaving it in here as a reminder that, while we don't use it
// directly... it is still needed for postcss to pickup sass files correctly
import 'node-sass';

// TODO: add license name in banner once we figure that out
const bannerText = `/*!
  Copyright (c) ${new Date().getFullYear()} EBTH Inc.
  https://github.com/ebth/design-system
*/\n`;

const svgPath = () => ({
  name: 'svgPath',
  load(id) {
    if (extname(id) !== '.svg') {
      return null;
    }

    const data = readFileSync(id, 'utf-8');

    return new Promise((resolve, reject) => {
      return parseString(data, (err, result) => {
        if (err) {
          return reject(err);
        }

        const path = result.svg.path[0].$.d;
        const code = `export default '${path}';`;
        const ast = {
          type: 'Program',
          sourceType: 'module',
          start: 0,
          end: null,
          body: []
        };

        // Export as JS
        return resolve({ ast, code, map: { mappings: '' } });
      });
    });
  }
});

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      banner: bannerText
    },
    plugins: [
      // use the node method of resolving file imports. by default things
      // like importing folders with index.js will not work
      resolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      postcss({
        sourceMap: true,
        extract: true,
        inject: false,
        use: ['sass'],
        modules: {
          // we do not want to transform our css class names since they will
          // also be referenced by components outside of our react components.
          // once all components render via the react component we can use the
          // default class name transformations!
          generateScopedName: '[local]'
        }
      }),
      // export flow typings.. this is actually really lazy
      // since our code is in flow, flow will just reference the raw source
      flowEntry({ mode: 'strict-local' }),
      // use babel to transform our source files
      babel({
        // pick up the shared babel.config.js/.bablerc file for config
        babelrc: true
      }),
      copy({
        targets: { 'src/stylesheets': 'dist' }
      }),
      svgPath()
    ],
    // TODO: just pull in from package.json peerDependencies and dependencies
    external: ['react', 'react-dom', 'classnames', '@tippy.js/react']
  }
];
