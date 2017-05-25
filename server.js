var express = require('express');
var app = express();
var path = require('path');

// users
app.use(express.static('public'));

// listen
app.listen(5678, function(){
  console.log('server up : 5678'); // displayed in terminal
});

// base URL
app.get('/', function(req, res){
  console.log('base URL was hit'); // displayed in terminal
  // send file at resolved path
  // displayed in browser pointed at localhost:5678
  // res.send('I came from the server!');
  res.sendFile(path.resolve('views/index.html'));
}); // end base URL
