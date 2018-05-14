var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
        cubesOrtho: './app/cubesOrtho.js',
        cubesPerspective: './app/cubesPerspective.js',
        cubesSpotLighting : './app/cubesSpotLighting.js',
        cube : "./app/main2.js",
        triangle: './app/main.js',
        cubesDirectionalLight : "./app/cubesDirectionalLight.js",
        cubesPointLight : "./app/cubesPointLight.js",
        graph : "./app/graph.js",
        sphere : "./app/SpherePerspective.js"
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