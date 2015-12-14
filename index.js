var exec = require('child_process').exec;

module.exports = function(source) {
  var callback = this.async();
  var cmd = 'elixirscript "' + source.replace(/"/g, '\\"') + '" -ex -stp elixirscript';
  exec(cmd, function (error, stdout, stderr) {
    if(error || stderr){
      callback(error || stderr, null);
    }
    if(stdout){
      console.log(stdout);
      callback(null, stdout);
    }
  });
};
