var webpack = require('webpack'),
    path    = require('path');

module.exports={
  context: path.join(__dirname, "src"),
  entry: "./js/app.js",
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "js/app.min.js"
  }
};
