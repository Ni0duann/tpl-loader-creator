const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/app.js"),
  output: {
    path: resolve(__dirname, "build"),
    filename: "app.js",
  },
  devtool: "source-map",
  resolveLoader: {
    modules: ['node_modules',resolve(__dirname,'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: [
          "babel-loader",
          {
            loader: "tpl-loader",
            options: {
              log: false
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
    }),
  ],
  devServer: {
    port: 3333,
  },
};
