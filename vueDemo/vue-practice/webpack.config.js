var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    'vender': ['vue', 'vuex', 'vue-router'],
    './cms/lib/element-ui': ['element-ui'],
    './cms/lib/main': path.resolve(__dirname,'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publishPath: 'dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|operation)/
      }, {
        test: /\.vue$/,
        loader: 'vue'
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

    // 公共文件打包，避免业务重复打包
    new webpack.optimize.CommonsChunkPlugin('vender',  'vender.js'),

    // 生成CMS主页
    new HtmlWebpackPlugin({
      title: 'Gavin todolist',
      hash: true,
      filename: 'index.html',
      template: './src/index.html'
    }),

    // 生成活动主页
    new HtmlWebpackPlugin({
      title: '活动页面',
      hash: true,
      filename: 'operation/index.html',
      template: './src/operation/index.html'
    })
  ],

  babel: {
    presets: ['es2015']
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
