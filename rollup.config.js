import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import flowEntry from 'rollup-plugin-flow-entry';
import postcss from 'rollup-plugin-postcss';
// so this node-sass import actaully does nothing
// but i'm leaving it in here as a reminder that, while we don't use it
// directly... it is still needed for postcss to pickup sass files correctly
import 'node-sass';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
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
        use: ['sass']
      }),
      // export flow typings.. this is actually really lazy
      // since our code is in flow, flow will just reference the raw source
      flowEntry({ mode: 'strict-local' }),
      // use babel to transform our source files
      babel({
        // we dont want to bundle in all our dependencies, the end user's build
        // system will handle this. this will also keep our dist lib size down
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              // by default babel will try to convert ES6 classes to CJS classes
              // we dont want to do this since end users can consume classes just fine
              modules: false
            }
          ],
          ['@babel/preset-react', {}],
          // strip out flow typings
          ['@babel/preset-flow', {}]
        ]
      })
    ],
    // TODO: just pull in from package.json peerDependencies and dependencies
    external: ['react', 'react-dom', 'classnames']
  }
];
