var fs = require('fs');
var file = process.argv[2];

var buf = fs.readFile(file, function(err, data) {
  if(err) throw err;
  var contents = data.toString('utf8').split('\n');
  console.log(contents.length - 1);
});
