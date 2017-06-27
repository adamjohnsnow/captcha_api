var mongoose = require('mongoose');
var database = require('./database.js')
var Schema = mongoose.Schema;

mongoose.connect(database.dev);

var gameDataSchema = new Schema({
  gameType: { type: String, required: true},
  mains:  {type: String, required: true},
  solution: {type: String}
})

var GameData = mongoose.model('GameData', gameDataSchema);
module.exports = GameData;
