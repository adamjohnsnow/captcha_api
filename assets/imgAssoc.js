var getMain = require('./dbAccess.js')

var ImgAssoc = function(stubNumber){
  this.type = 'imgAssoc'
  var game = getMain(this.type)

  this.gameData = {
    mainString: game.main,
    gameKey: game.id
  };
};


module.exports = ImgAssoc
