module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  babel: {
    presets: ['es2015']
  }
}
