const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/captcha_api_dev'


var getGameData = function(gameResponse, callback){
  var gameAnswer = null

  pg.connect(connectionString, (err, client, done) => {
    // Handle connection Errors

    if(err){
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    };

    var answerQueryString = "SELECT * FROM games WHERE id = '"+gameResponse.id+"';";
    const answerQuery = client.query(answerQueryString);
    answerQuery.on('row', (row) => {
      gameAnswer = row
    });

    answerQuery.on('end', () => {
      if (gameAnswer.gametype === 'imgAssoc'){
        var authenticate = (gameAnswer.solution === gameResponse.img)
      }
      if (gameAnswer.gametype === 'areaClick' ||
          gameAnswer.gametype === 'dragDrop'){
        coordsString = "gameAnswerCoords = " + gameAnswer.solution + ";";
        eval(coordsString);
        var authenticate = (Number(gameResponse.x) > gameAnswerCoords.xLowLimit &&
        Number(gameResponse.x) < gameAnswerCoords.xHighLimit &&
        Number(gameResponse.y) > gameAnswerCoords.yLowLimit &&
        Number(gameResponse.y) < gameAnswerCoords.yHighLimit)
      }
        callback(authenticate);
        done();
      });
    });
};

module.exports = getGameData;
