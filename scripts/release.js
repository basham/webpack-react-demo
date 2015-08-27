var rimraf = require('rimraf');
var process = require('child_process');

rimraf('./release', function(err) {
  var script = 'node ./node_modules/webpack/bin/webpack.js --config webpack.production.config.js';
  process.exec(script, function(err, stdout, stderr) {
    // Output child process console log.
    console.log(stdout);
  })
});
