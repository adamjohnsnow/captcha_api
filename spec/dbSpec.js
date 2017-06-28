var getGameData = require('../assets/getGameData')
var getGameAnswer = require('../assets/getGameAnswer')

describe('database "getGameData" query tests', function(){
  var gameData

  it('returns an imgAssoc game', function(){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.gameType).toEqual('imgAssoc');
    });
  })

  it('returns the URL for the imgAssoc image', function(){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.mainString).toEqual('http://i.imgur.com/kvToefa.jpg');
    });
  })

  it('returns a gameKey', function(){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.gameKey).toEqual(1);
    });
  })

  it('returns an array of 3 images', function(){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.promptStrings.length).toEqual(3);
    });
  })

  it('returns an areaClick game', function(){
    getGameData('areaClick', function(gameData){
      expect(gameData.gameType).toEqual('areaClick');
    });
  })

  it('returns an areaClick game with gameKey 16', function(){
    getGameData('areaClick', function(gameData){
      expect(gameData.gameKey).toEqual(16);
    });
  })
})


describe('database "getGameAnswer" query tests', function(){
  var gameData

  it('returns a true on imgAssoc game', function(){
    var query = { id: 1, img: 'http://i.imgur.com/z7BxMwH.jpg' }
    getGameAnswer(query, function(gameData){
      expect(gameData).toEqual(true);
    });
  })

  it('returns a false on imgAssoc game', function(){
    var query2 = { id: 5, img: 'http://i.iur.com/z7BxMwH.jpg' }
    getGameAnswer(query2, function(gameData){
      expect(gameData).toEqual(false);
    });
  })

})
