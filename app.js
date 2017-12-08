const express = require('express');
var path = require('path');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname + '/index.html'));
});

app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
