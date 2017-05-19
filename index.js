var util = require("util");
var exec = require("child_process").exec;

var Qpdf = function () {
};

Qpdf.prototype.decrypt = function (input, output) {
  var command = this._constructDecryptCommand(input, output);
  
  return new Promise(function (resolve, reject) { 
    exec(command, function (err, stdout, stderr) {
      if (err) {
        return reject(err);
      }

      return resolve('done')
    });
  })
};

Qpdf.prototype._constructDecryptCommand = function (input, output) {
  return util.format(
    "qpdf --decrypt %s %s",
    input,
    output
  );
}

module.exports = new Qpdf;
