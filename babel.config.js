module.exports = {
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
};
