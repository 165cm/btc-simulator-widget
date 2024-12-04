module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }],
      ['@babel/preset-react', {
        runtime: 'automatic'
      }]
    ]
  };