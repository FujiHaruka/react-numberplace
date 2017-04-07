const webpack = require('webpack')
const { resolve } = require('path')
const values = require('postcss-modules-values')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    resolve('./demo/index')
  ],
  output: {
    path: resolve('./docs/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          values,
          autoprefixer
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: [ /node_modules/ ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
}
