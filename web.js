var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());


//var buffer = new Buffer();

var res = fs.readFileSync('index.html','utf8')
console.log(res);

app.get('/', function(request, response) {
  response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
