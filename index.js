var exec = require("child_process").exec;
var loaderUtils = require("loader-utils");

function buildCommand(options) {
  if (!options.inputFolder) {
    throw "inputFolder required";
  }

  var args = ["elixirscript"];

  if (options.inputFolder) {
    var input = [];

    if (Array.isArray(options.inputFolder)) {
      input = options.inputFolder;
    } else {
      input = [options.inputFolder];
    }

    input = input.join(" ");

    args.push(input);
  }

  var modules = options.jsModules.map(function(module) {
    return "--js-module " + module.join(":");
  });

  args = args.concat(modules);

  return args.join(" ");
}

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var callback = this.async();

  var options = Object.assign(
    {},
    { jsModules: [] },
    loaderUtils.getOptions(this) || {}
  );

  var cmd = buildCommand(options);

  exec(cmd, function(error, stdout, stderr) {
    if (error) {
      callback(new Error(stdout), null);
    } else {
      callback(null, stdout);
    }
  });
};
