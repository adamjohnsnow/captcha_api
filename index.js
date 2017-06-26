var express = require('express');
var bodyparser = require('body-parser')
var app = express();
// var session = require('express-session');
// var getAnswer = require('./assets/antworten')
// var Minigames = require('./assets/minigames')

app.listen(7070, function(){
  console.log('port is 7070!')
})

app.get('/', function(req, res){
  res.send('working')
})
