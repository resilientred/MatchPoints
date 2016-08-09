var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/matchPoint.js",
  output: {
    path: path.join(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};