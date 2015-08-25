var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = {
  build: __dirname + '/build',
  node: __dirname + '/node_modules',
  source: __dirname + '/src'
};

var deps = {
  'react/lib': paths.node + '/react/lib',
  react: paths.node + '/react/dist/react.min.js'
};

module.exports = {
  context: paths.source,
  entry: {
    main: [
      // WebpackDevServer host and port.
      'webpack-dev-server/client?http://localhost:8080',
      // Hot module reloading behavior. Ignores automatic browser refreshes.
      'webpack/hot/only-dev-server',
      // Main entry point.
      './main.js'
    ],
    // List vender libraries.
    vendors: [
      'classnames',
      'react'
    ]
  },
  output: {
    filename: '[name].js',
    path: paths.build
  },
  resolve: {
    // Force all references to React from an external source to point a single path.
    alias: {
      'react/lib': deps['react/lib'],
      // React references should point to the minified version, rather than source.
      'react': deps.react
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
    // Enable hot module replacement.
    new webpack.HotModuleReplacementPlugin(),
    // Ignore injecting code with errors.
    new webpack.NoErrorsPlugin(),
    // Merge vender libraries to single output.
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    // Create `index.html` with appropriate references to generated files.
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
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
    ],
    // Don't parse the minified version of React, to save time in the build process.
    noParse: [deps.react]
  }
};
