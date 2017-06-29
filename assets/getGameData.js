const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/captcha_api_dev'


var getGameData = function(minigame, callback){
  var gameResults = []
  var decoyResults = []

  function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    };
  };

  pg.connect(connectionString, (err, client, done) => {
    // Handle connection Errors

    if(err){
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    };

    var gameQueryString = "SELECT * FROM games WHERE gametype = '"+minigame+"';";
    const gameQuery = client.query(gameQueryString);
    gameQuery.on('row', (row) => {
      gameResults.push(row);
    });

    var decoyQueryString = "SELECT * FROM games WHERE gametype = 'decoy';";
    const decoyQuery = client.query(decoyQueryString);
    decoyQuery.on('row', (row) => {
      decoyResults.push(row);
    });

    gameQuery.on('end', () => {
      decoyQuery.on('end', () => {

        var game = gameResults[Math.floor(Math.random() * gameResults.length)]
        function getDecoyArray(){

          var decoyArray = []

          var decoy1 = decoyResults[Math.floor(Math.random() * decoyResults.length)].main
          var decoy2 = decoyResults[Math.floor(Math.random() * decoyResults.length)].main

          while(decoy1 === decoy2){ decoy2 = decoyResults[Math.floor(Math.random() * decoyResults.length)].main }

          decoyArray = [game.solution, decoy1, decoy2]
          shuffle(decoyArray);
          console.log(decoyArray)
          return decoyArray

        }
        var gameData = {gameKey: game.id, mainString: game.main, gameType: game.gametype, promptStrings: getDecoyArray()}
        callback(gameData);
        done();
      });
    });
  });
};

module.exports = getGameData;
