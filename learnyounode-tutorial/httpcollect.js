var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
  var results = '';
  res.setEncoding('utf8');
  res.on("data", function(data) {
    results += data;
    // console.log(data);
  });
  res.on("end", function() {
    console.log(results.length);
    console.log(results);
  });
});
