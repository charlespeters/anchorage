'use strict';

module.exports = {
  bail: true,
  devtool: "inline-source-map",
  entry: {
    test: './test.js',
  },
  node: {
    fs: 'empty',
  },
  output: {
    filename: '[name].js',
    path: './dist',
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      } 
    ],
  },
};

