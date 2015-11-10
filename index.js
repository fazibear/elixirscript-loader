var exec = require('child_process').exec;

// Identity loader
module.exports = function(source) {
  var callback = this.async();
  exec("ex2js '" + source + "' -ex -r elixirscript", function (error, stdout, stderr) {
    if(error || stderr){
      callback(error || stderr, null);
    }
    if(stdout){
      callback(null, stdout);
    }
  });
};
