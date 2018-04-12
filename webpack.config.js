var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
        cube: './app/main2.js',
        triangle: './app/main.js'
     },
     output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'    
     },
     module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };