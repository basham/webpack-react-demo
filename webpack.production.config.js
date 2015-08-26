var webpack = require('webpack');

var paths = {
  node: __dirname + '/node_modules',
  source: __dirname + '/src',
  output: __dirname + '/release'
};

module.exports = {
  context: paths.source,
  entry: {
    main: './main.js',
    // List vender libraries.
    vendors: [
      'classnames',
      'react'
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
  plugins: [
    // Removes a lot of debugging code in React.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Keeps hashes consistent between compilations.
    new webpack.optimize.OccurenceOrderPlugin(),
    // Minifies code.
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    // Merge vender libraries to single output.
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[hash:base64:5]',
          'autoprefixer',
          'less'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.svg$/,
        loaders: [
          'raw',
          'svgo'
        ]
      }
    ]
  }
};
