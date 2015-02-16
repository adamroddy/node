var http = require('http');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];

var urlList = [];
var count = 0;

function getData(url, index) {

  http.get(url, function(res) {
    var results = '';
    res.setEncoding('utf8');
    res.on("data", function(data) {
      results += data;
    });
    res.on("end", function() {
      urlList[index] = results;
      count++;
      if (count === 3) {
        urlList.forEach(function(item) {
          console.log(item);
        });
      }
    });
  });
}

getData(urlOne, 0);
getData(urlTwo, 1);
getData(urlThree, 2);


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
//   }
//
//   function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//
//           results[index] = data.toString()
//           count++
//
//           if (count == 3) // yay! we are the last one!
//             printResults()
//           }))
//         })
//       }
//
//       for (var i = 0; i < 3; i++)
//         httpGet(i)
