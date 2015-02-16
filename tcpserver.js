var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
  var date = new Date();
  socket.end("" +
    date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate()  +
    " " + date.getHours() + ":" + (date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes()) + "\n");
});
server.listen(process.argv[2]);

//do again with time library: strftime (one example of a time library)
