var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/matchPoints.js",
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
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};