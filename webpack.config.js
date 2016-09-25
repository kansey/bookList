var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname);

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel'
      },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
      { test: /\.useable\.css$/, loader: "style/useable!css" },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
module.exports = config;

