var express = require('express');
var bodyparser = require('body-parser')
var app = express();
var cors = require('cors')
var ImgAssoc = require('./assets/imgAssoc')
var AreaClick = require('./assets/areaClick')
var mongoose = require('mongoose');
var database = require('./config/database')
var GameData = require('./config/gameData');

mongoose.connect(database.dev);

app.set('port', (process.env.PORT || 7070))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use('/captchupFiles', express.static('captchupFiles'));
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

app.get('/showgames', function(req, res){
  GameData.find({}, function(err, gameData){
    res.send(gameData)
  })
})
app.get('/creategame', function(req, res){
  var game = new GameData();
  game.gameType = 'imgAssoc'
  game.mains = '//someimg.url.com'
  game.solution = '{ x: 123, y: 321 }'
  game.save();
  res.redirect('/showgames')
})

app.get('/test', function(req, res){
  res.render('api_test', {})
})

app.get('/area-click-test', function(req, res){
  res.render('heroku_api_test', {})
})

app.get('/area-click', function(req, res){
  var capcha = new AreaClick();
  res.send(capcha.gameData);
})

app.post('/area-click-answer', function(req, res){
  captcha = new AreaClick()
  res.send(captcha.getSolution(req.query))
})
