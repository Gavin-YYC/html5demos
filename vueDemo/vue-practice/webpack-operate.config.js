var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    './operation/index': path.resolve(__dirname,'src/operation/index.js')  // cms 入口文件
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publishPath: 'dist/',
    filename: '[name]-[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /[^(node_modules|operation)]/
      }, {
        test: /\.vue$/,
        exclude: /[^(operation)]/,
        loader: 'vue'
      }, {
			  test:/\.css$/,
        exclude: /[^(operation)]/,
  			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  		}, {
        exclude: /[^(operation)]/,
        loader:  "style!css!less"
      }
    ]
  },

  plugins: [
    // 生成CMS主页
    new HtmlWebpackPlugin({
      title: 'operation',
      filename: './operation/index.html',
      template: './src/operation/index.html'
    })
  ]
}
