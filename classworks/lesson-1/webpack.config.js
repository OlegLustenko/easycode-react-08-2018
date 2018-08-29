const path = require('path');
/*
*
* JSX -> Babel -> React <3
*
* */
module.exports = {
  entry: path.resolve('./src/main'),
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      },
    ]
  }
};
