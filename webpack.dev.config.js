var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var pkg = require('./package.json');

var paths = {
  node: path.join(__dirname, 'node_modules'),
  source: path.join(__dirname, 'src'),
  output: path.join(__dirname, 'build')
};

var address = 'localhost';
var port = 8080;
var url = 'http://' + address + ':' + port;

module.exports = {
  context: paths.source,
  entry: {
    app: [
      // WebpackDevServer host and port.
      'webpack-dev-server/client?' + url,
      // Hot module reloading behavior. Ignores automatic browser refreshes.
      'webpack/hot/only-dev-server',
      // Main entry point.
      './index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: paths.output,
    pathInfo: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    // Ensure dependencies in external packages will use this projects's loaders,
    // instead of resolving to its loaders.
    root: paths.node
  },
  // WebpackDevServer config.
  devServer: {
    address: address,
    hot: true,
    noInfo: true,
    port: port,
    url: url
  },
  // Set loaders to debug mode.
  debug: true,
  // Generate source maps, so its easier to find errors in code.
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // Define global variables that will be replaced inline during compile.
    new webpack.DefinePlugin({
      CONTAINER_ID: JSON.stringify(pkg.config.containerId)
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
        // Ignore processing any node modules except for explicit ones.
        // This speeds development and prevents potential issues.
        include: [
          paths.source,
          path.join(paths.node, 'iu-ess-ux-components')
        ],
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
