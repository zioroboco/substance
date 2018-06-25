const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "babel-plugin-syntax-typescript",
                "babel-plugin-syntax-jsx",
                "react-hot-loader/babel"
              ]
            }
          },
          {
            loader: "ts-loader"
          }
        ],
        include: path.join(__dirname, "src")
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "eval-source-map",
  output: {
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html")
    })
  ]
}
