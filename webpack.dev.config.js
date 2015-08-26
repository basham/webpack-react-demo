var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pkg = require('./package.json');

var paths = {
  node: __dirname + '/node_modules',
  source: __dirname + '/src',
  output: __dirname + '/build'
};

module.exports = {
  context: paths.source,
  entry: {
    app: [
      // WebpackDevServer host and port.
      'webpack-dev-server/client?http://localhost:8080',
      // Hot module reloading behavior. Ignores automatic browser refreshes.
      'webpack/hot/only-dev-server',
      // Main entry point.
      './index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: paths.output
  },
  resolve: {
    alias: {
      // Force all references to React from an external source to point a single path.
      'react': paths.node + '/react'
    },
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    // Ensure dependencies in external packages will use this projects's loaders,
    // instead of resolving to its loaders.
    root: paths.node
  },
  // WebpackDevServer config.
  devServer: {
    hot: true,
    noInfo: true
  },
  plugins: [
    // Define global variables that will be replaced inline during compile.
    new webpack.DefinePlugin({
      CONTAINER_ID: JSON.stringify(pkg.config.containerId),
    }),
    // Enable hot module replacement.
    new webpack.HotModuleReplacementPlugin(),
    // Ignore injecting code with errors.
    new webpack.NoErrorsPlugin(),
    // Create `index.html` with appropriate references to generated files.
    new HtmlWebpackPlugin({
      title: pkg.name,
      containerId: pkg.config.containerId,
      inject: true,
      template: paths.source + '/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[path][local]_[hash:base64:5]',
          'autoprefixer',
          'less'
        ]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'raw'
      }
    ]
  }
};
