# JEN Stack Start
## Setup Server
- Initialize npm: ```npm init```
  - name: ```jen_stack_start```
  - description: ```jen statck start for omega```
  - keywords: ```jquery node express```
- Install Express.js for routes: ```npm install express --save```
  - will result in ```node_modules``` directory being created with subdirectory of ```express```
  - ```--save``` flag will update Express.js

- Create 'server.js'
- Require Express.js in 'server.js'
```var express = require('express');```
- Setup and Express.js app in 'server.js'
```var app = express();

// listen
app.listen(5678, function(){
  console.log('server up : 5678');
});
```

- Startup server in terminal and make sure it is listening
- In terminal: ``node server.js```
- Response in terminal: ```server up : 5678```

- Setup base URL route:
```// base URL
app.get('/', function(req, res){
  console.log('base URL was hit'); // displayed in terminal
  res.send('I came from the server!'); // displayed in browser pointed at localhost:5678
});```

  - Open 'localhost:5678'
  - Should see in browser "I came from the server!"
  - Should see "base URL hit" in the terminal
