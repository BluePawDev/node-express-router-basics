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
- Require Express.js
- Setup and Express.js app
```var express = require('express');
var app = express();

// listen
app.listen(5678, function(){
  console.log('server up : 5678');
});```
