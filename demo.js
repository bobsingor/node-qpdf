var qpdf = require('./index');

qpdf.decrypt('./input.pdf', './output.pdf').then(function (data) {
  console.log(data);
}, function (error) {

});