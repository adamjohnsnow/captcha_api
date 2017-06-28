var getGameData = require('../assets/getGameData')
var getGameAnswer = require('../assets/getGameAnswer')

describe('database "getGameData" query tests', function(){
  var gameData

  it('returns an imgAssoc game', function(done){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.gameType).toEqual('imgAssoc');
      done();
    });
  })

  it('returns the URL for the imgAssoc image', function(done){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.mainString).toEqual('http://i.imgur.com/kvToefa.jpg');
      done();
    });
  })

  it('returns a gameKey', function(done){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.gameKey).toEqual(1);
      done();
    });
  })

  it('returns an array of 3 images', function(done){
    getGameData('imgAssoc', function(gameData){
      expect(gameData.promptStrings.length).toEqual(3);
      done();
    });
  })

  it('returns an areaClick game', function(done){
    getGameData('areaClick', function(gameData){
      expect(gameData.gameType).toEqual('areaClick');
      done();
    });
  })

  it('returns an areaClick game with gameKey 16', function(done){
    getGameData('areaClick', function(gameData){
      expect(gameData.gameKey).toEqual(16);
      done();
    });
  })

  it('returns a dragDrop game with gameKey 17', function(done){
    getGameData('dragDrop', function(gameData){
      expect(gameData.gameKey).toEqual(17);
      done();
    });
  })

})


describe('database "getGameAnswer" query tests', function(){
  var gameData

  it('returns a true on imgAssoc game', function(done){
    var query = { id: 1, img: 'http://i.imgur.com/z7BxMwH.jpg' }
    getGameAnswer(query, function(result){
      expect(result).toEqual(true);
      done();
    });
  })

  it('returns a false on imgAssoc game', function(done){
    var query2 = { id: 1, img: 'http://i.iur.com/z7xMwH.jpg' }
    getGameAnswer(query2, function(result){
      expect(result).toEqual(false);
      done();
    });
  })

  it('returns a true on areaClick game', function(done){
    var query3 = { id: 16, x: 140, y: 60 }
    getGameAnswer(query3, function(result){
      expect(result).toEqual(true);
      done();
    });
  })

  it('returns a false on areaClick game', function(done){
    var query4 = { id: 16, x: 100, y: 40 }
    getGameAnswer(query4, function(result){
      expect(result).toEqual(false);
      done();
    });
  })

  it('returns a true on dragDrop game', function(done){
    var query5 = { id: 17, x: 140, y: 60 }
    getGameAnswer(query5, function(result){
      expect(result).toEqual(true);
      done();
    });
  })


})
