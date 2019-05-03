module.exports = {
  // we dont want to bundle in all our dependencies, the end user's build
  // system will handle this. this will also keep our dist lib size down
  exclude: 'node_modules/**',
  presets: [
    ['@babel/preset-env', {}],
    // convert jsx to js
    ['@babel/preset-react', {}],
    // strip out flow typings
    ['@babel/preset-flow', {}]
  ]
};
