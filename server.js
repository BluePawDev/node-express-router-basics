var express = require('express');
var app = express();

// listen
app.listen(5678, function(){
  console.log('server up : 5678'); // displayed in terminal
});

// base URL
app.get('/', function(req, res){
  console.log('base URL was hit'); // displayed in terminal
  res.send('I came from the server!'); // displayed in browser pointed at localhost:5678
});
