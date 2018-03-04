var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
        app: './geometric/Point2D.js',
        ratefinder: './js/ratefinder.js'
     },
     output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'    
     },
     module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            }
          }
        }
      ]
    
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };