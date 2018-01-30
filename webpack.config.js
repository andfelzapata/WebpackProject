var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        try: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
