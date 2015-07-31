var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = {
  reactLib: __dirname + '/node_modules/react/lib',
  react: __dirname + '/node_modules/react/dist/react.min.js'
};

module.exports = {
  context: __dirname + '/src',
  entry: {
    main: './main.js',
    cycle: './cycle.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  resolve: {
    alias: {
      'react/lib': paths.reactLib,
      'react': paths.react
    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      inject: true,
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        loader: 'style!css?modules&localIdentName=[path][local]_[hash:base64:5]!less'
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
    noParse: [paths.react]
  }
};
