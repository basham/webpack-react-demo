var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = {
  node: __dirname + '/node_modules',
  source: __dirname + '/src',
  build: __dirname + '/build'
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
    vendors: ['react', 'classnames']
  },
  output: {
    filename: '[name].js',
    path: paths.build
  },
  resolve: {
    alias: {
      'react/lib': deps['react/lib'],
      'react': deps.react
    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
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
    noParse: [deps.react]
  }
};
