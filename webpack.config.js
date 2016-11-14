var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel", "eslint-loader"]
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules"
    ],
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'DEVTOOLS': true
      }
    })
  ]
};