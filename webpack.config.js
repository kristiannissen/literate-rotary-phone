/**
 */
const path = require("path"),
  webpack = require("webpack"),
  VueLoaderPlugin = require("vue-loader/lib/plugin");

const conf = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "src")]
      },
      { test: /\.css$/, loader: "css-loader" }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};

module.exports = conf;
