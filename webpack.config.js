module.exports = {
  context: __dirname + '/src',
  entry: {
    main: './main.js',
    index: './index.html'
  },
  output: {
    filename: 'main.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[path][local]_[hash:base64:5]'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  }
};
