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
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
