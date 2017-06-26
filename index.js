var express = require('express');
var bodyparser = require('body-parser')
var app = express();
// var session = require('express-session');
// var getAnswer = require('./assets/antworten')
var Minigames = require('./assets/areaClick')

app.listen(7070, function(){
  console.log('port is 7070!')
})

app.get('/', function(req, res){
  var capcha = new Minigames();
  res.send(capcha.gameData);
})


app.post('/answer', function(req, res){


})
