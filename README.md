# JEN Stack Start
## Setup Server
- Initialize npm: ```npm init```
  - name: ```jen_stack_start```
  - description: ```jen statck start for omega```
  - keywords: ```jquery node express```
- Install Express.js for routes: ```npm install express --save```
  - will result in ```node_modules``` directory being created with subdirectory of ```express```
  - ```--save``` flag will add/update Express.js key:value pair with version of Express.js

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
});
```

- Open 'localhost:5678'
- Should see in browser "I came from the server!"
- Should see "base URL hit" in the terminal

- CRTL + C ---> stops server (NOT CMD + C)

- Add node_modules to .gitignore

### Respond with HTML:
- create "views" folder
- create 'index.html' within this folder
- put some HTML in there
- add ```var path = require('path');``` at top of server file with other requires
- change res.send line to ```res.sendFile(path.resolve('views/index.html'));```

### Add JavaScript/jquery
- create "public" folder in root
- create "scripts" folder in "public"
- create client-side JavaScript in "scripts"

Set public folder to "static" using express: ```app.use(express.static('public'));```
-source in  JavaScript in HTML: ```<script type="text/javascript" src='scripts/songs.js'></script>```
