var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
        /** put your file location here */
        cenario01 : "./app/cenario01.js",
        cenario02 : "./app/cenario02.js",
        cenario03 : "./app/cenario03.js",
        cenario04 : "./app/cenario04.js",
        cenario05 : "./app/cenario05.js",
        cenario06 : "./app/cenario06.js",
        cenario01SemComponent : "./app/cenario01SemComponente.js",
        cenario02SemComponent : "./app/cenario02SemComponent.js",
        cenario03SemComponent : "./app/cenario03SemComponent.js",
        cenario04SemComponent : "./app/cenario04SemComponente.js",
        cenario05SemComponent : "./app/cenario05SemComponente.js",
        cenario06SemComponent : "./app/cenario06SemComponente.js",
        exemploMon : "./app/exemploMon.js"
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