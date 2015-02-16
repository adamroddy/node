var url = require('url');
var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.method != 'GET')
    return res.end('send me a GET\n');

  res.writeHead(200, { 'Content-Type': 'application/json' });
  var reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === "/api/parsetime") {
    var iso = new Date(reqUrl.query.iso);
    var result = {
      "hour": iso.getHours(),
      "minute": iso.getMinutes(),
      "second": iso.getSeconds()
    };
    res.end(JSON.stringify(result));
  }

  if (reqUrl.pathname === "/api/unixtime") {
    var iso = new Date(reqUrl.query.iso).getTime();
    var result = {
      "unixtime": iso
    };
    res.end(JSON.stringify(result));
  }

});

server.listen(process.argv[2]);


// SOLUTION:
// var http = require('http')
//     var url = require('url')
//
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
//
//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }
//
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
//
//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)
//
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
