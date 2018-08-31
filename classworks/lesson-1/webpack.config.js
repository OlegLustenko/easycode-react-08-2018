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
  devtool: '',
  module: {
    rules: [
      {
        test: /.js?x$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot|png|jpg)$/,
        use: 'file-loader'
      }
    ]
  }
};
