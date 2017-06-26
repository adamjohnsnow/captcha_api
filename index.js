var express = require('express');
var bodyparser = require('body-parser')
var app = express();
// var session = require('express-session');
// var getAnswer = require('./assets/antworten')
var Minigames = require('./assets/areaClick')

var port


app.set('port', (process.env.PORT || 7070))

app.listen(app.get('port'), function(){
  console.log('port is ' + app.get('port'))
})

app.get('/', function(req, res){
  var capcha = new Minigames();
  res.send(capcha.gameData);
})


app.post('/answer', function(req, res){


})
