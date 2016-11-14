module.exports = {
  entry: './main.js',
  output: {
    filename: 'build.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
