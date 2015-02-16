var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var contents = buf.toString('utf8').split('\n');
console.log(contents.length - 1);
