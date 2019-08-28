import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import analyze from 'rollup-plugin-analyzer';

// so this node-sass import actually does nothing
// but i'm leaving it in here as a reminder that, while we don't use it
// directly... it is still needed for postcss to pickup sass files correctly
import 'node-sass';

// TODO: add license name in banner once we figure that out
const bannerText = `/*!
  Copyright (c) ${new Date().getFullYear()} EBTH Inc.
  https://github.com/ebth/design-system
*/\n`;

const jsExtensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      exports: 'named',
      sourcemap: true,
      banner: bannerText
    },
    plugins: [
      analyze({ stdout: true }),
      resolve({
        extensions: jsExtensions
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
      // flowEntry({ mode: 'strict-local' }),
      // use babel to transform our source files
      babel({
        // pick up the shared babel.config.js/.bablerc file for config
        babelrc: true,
        extensions: jsExtensions
      }),
      copy({
        targets: [{ src: 'src/stylesheets', dest: 'dist' }],
        verbose: true
      })
    ],
    // TODO: just pull in from package.json peerDependencies and dependencies
    external: ['react', 'react-dom', 'classnames', '@tippy.js/react']
  }
];
