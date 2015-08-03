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
    main: './main.js',
    cycle: './cycle.js',
    // List vender libraries to group.
    vendors: ['react', 'classnames']
  },
  output: {
    filename: '[name].js',
    path: paths.build
  },
  resolve: {
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
  plugins: [
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
        loader: 'style!css?modules&localIdentName=[path][local]_[hash:base64:5]!autoprefixer!less'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
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
