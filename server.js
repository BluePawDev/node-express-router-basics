var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// users
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// globals
var songs = [];

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

app.get('/allSongs', function(req, res){
  console.log('get /songs hit');
  var responseObj = {
    allSong: songs
  };
  res.send(responseObj);
}); // end get /songs

app.post('/newSong', function(req, res){
  console.log('song hit to /newSong', req.body);
  songs.push(req.body);
  res.send('meow');
});
