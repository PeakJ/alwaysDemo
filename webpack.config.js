const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const path = require('path');
const webpack = require('webpack'); //访问内置的插件


const webpackConfig = {
  devtool: 'eval-source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    // new HtmlWebpackPlugin({template: './index.html'})
  ]
};
module.exports = webpackConfig;