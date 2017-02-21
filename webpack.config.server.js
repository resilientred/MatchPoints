var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

module.exports = {
  entry: './app/app.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.ttf$/,
        loader: 'url',
        query: {
          limit: '10000',
          mimetype: 'application/octet-stream'
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    mainFiles: ['index'],
    extensions: ['', '.js', '.jsx'],
    alias: {
      assets: path.join(__dirname, 'src', 'assets'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};