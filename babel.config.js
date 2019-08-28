module.exports = {
  // we dont want to bundle in all our dependencies, the end user's build
  // system will handle this. this will also keep our dist lib size down
  exclude: 'node_modules/**',
  presets: [
    ['@babel/preset-env', {}],
    // convert jsx to js
    ['@babel/preset-react', {}],
    // strip out ts typings for TS/TSX
    ['@babel/preset-typescript', {}],
    // strip out flow typings for @flow files
    ['@babel/preset-flow', {}]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};
