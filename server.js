var express = require('express');
var app = express();
var colors = require('colors');

app.use('/', express.static(__dirname + '/public'));
app.use(express.static('dist'));

var port = process.env.port || 5001;
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server is listening at'.green, host, port);
});
