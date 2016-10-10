var path = require("path");
var webpack = require("webpack");
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: "./app/app.js",
  target: 'node',
  output: {
    path: path.join(__dirname, "build"),
    filename: "app.js"
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "eslint-loader"],
      }
    ]
  },
  resolve: {
    extensions: ["", ".js"]
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