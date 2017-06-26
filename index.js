var express = require('express');
var bodyparser = require('body-parser')
var app = express();
var cors = require('cors')
// var session = require('express-session');
// var getAnswer = require('./assets/antworten')
var ImgAssoc = require('./assets/imgAssoc')

app.set('port', (process.env.PORT || 7070))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(cors());
app.options('*', cors());

app.listen(app.get('port'), function(){
  console.log('port is ' + app.get('port'))
})

app.get('/', function(req, res){
  var capcha = new ImgAssoc();
  res.send(capcha.gameData);
})

app.post('/answer', function(req, res){
  captcha = new ImgAssoc()
  res.send(captcha.checkAnswer(req.query))
})

app.get('/test', function(req, res){
  res.render('api_test', {})
})
