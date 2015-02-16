var http = require('http')
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {
  var request = url.parse(req.url, true)
  console.log("\nRequest data: %j", request);
  var pathArray = request.path.split('?');
  console.log("\nPath first section: " + pathArray[0]);

  if(pathArray[0] === '/api/parsetime') {
    console.log("\n" + request.query.iso);
  }
  // res.writeHead(200, { 'content-type': 'text/plain' });
  // fs.createReadStream().pipe(res);
});

server.listen(process.argv[2])
