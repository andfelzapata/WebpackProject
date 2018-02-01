var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'faker', 'history', 'lodash', 'prop-types',
  'react-router-dom', 'redux', 'redux-form', 'redux-thunk',
  'react', 'react-dom', 'react-input-range', 'react-redux'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      style: path.resolve(__dirname, 'style/'),
      database: path.resolve(__dirname, 'database/'),
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components')
    }
  }
};
