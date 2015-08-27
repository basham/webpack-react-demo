var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var open = require('open');

var config = require('../webpack.dev.config');
var port = config.devServer.port;
var address = config.devServer.address;
var url = config.devServer.url;

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);
server.listen(port, address, function() {
  open(url);
});
