var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    'vender': ['vue', 'vuex', 'vue-router'],
    './common/element-ui': ['element-ui'],
    './main/main': path.resolve(__dirname,'src/main.js')  // cms 入口文件
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
        exclude: /(node_modules|operation)/
      }, {
        test: /\.vue$/,
        exclude: /operation/,
        loader: 'vue'
      }, {
			  test:/\.css$/,
        exclude: /operation/,
  			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  		}, {
        test:  /\.less$/,
        loader:  "style!css!less"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),

    // 公共文件打包，避免业务重复打包
    new webpack.optimize.CommonsChunkPlugin('vender',  './common/vender-[hash].js'),

    // 生成CMS主页
    new HtmlWebpackPlugin({
      title: 'CMS',
      filename: 'index.html',
      template: './src/index.html'
    })
  ],

  babel: {
    presets: ['es2015']
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'cheap-module-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ])
}
