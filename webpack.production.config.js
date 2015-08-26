var webpack = require('webpack');

var pkg = require('./package.json');

var paths = {
  node: __dirname + '/node_modules',
  source: __dirname + '/src',
  output: __dirname + '/release'
};

module.exports = {
  context: paths.source,
  entry: {
    app: './index.js',
    // List vender libraries.
    vendor: [
      'classnames',
      'react'
    ]
  },
  output: {
    filename: '[name].js',
    path: paths.output
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    // Ensure dependencies in external packages will use this projects's loaders,
    // instead of resolving to its loaders.
    root: paths.node
  },
  plugins: [
    // Define global variables that will be replaced inline during compile.
    new webpack.DefinePlugin({
      CONTAINER_ID: JSON.stringify(pkg.config.containerId),
      // Removes a lot of debugging code in React.
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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
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
