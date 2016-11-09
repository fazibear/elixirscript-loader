var exec = require('child_process').exec;

module.exports = function(source) {
  var callback = this.async();
  var cmd = 'elixirscript "' + source.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '" -ex -stp elixirscript';
  exec(cmd, function (error, stdout, stderr) {
    if(error || stderr){
      callback(error || stderr, null);
    }
    else if(stdout){
      callback(null, stdout);
    }
  });
};
