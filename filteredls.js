var fs = require('fs');
var path = require('path');
var myModule = require('./module.js');

myModule(process.argv[2], process.argv[3], function(err, data) {
  if(err) throw err;
  data.forEach(function(item) {
    console.log(item);
  });
});
