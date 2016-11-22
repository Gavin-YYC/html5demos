var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
			  test:/\.css$/,
  			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  		}, {
  			test: /\.(woff2?|eot|ttf)(\?.*)?$/,
  			loader: 'url',
  			query: {
  				limit: 10000,
  				name: 'fonts/[name].[ext]'
  			}
  		}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  
  plugins: [
    new ExtractTextPlugin('[name].css'),
    // 自动生成index.html，添加script标签、hash值
    new HtmlWebpackPlugin({
      title: 'Gavin todolist',
      hash: true,
      template: './src/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  babel: {
    presets: ['es2015']
  },

  devtool: false
}
