var exec = require('child_process').exec;

// Identity loader
module.exports = function(source) {
  var callback = this.async();
  var cmd = 'ex2js "' + source.replace(/"/g, '\\"') + '" -ex -r elixirscript';
  exec(cmd, function (error, stdout, stderr) {
    if(error || stderr){
      callback(error || stderr, null);
    }
    if(stdout){
      callback(null, stdout);
    }
  });
};
