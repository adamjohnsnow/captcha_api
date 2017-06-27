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
    const answerQuery = client.query(gameQueryString);
    answerQuery.on('row', (row) => {
      gameAnswer = row
    });

    // var decoyQueryString = "SELECT * FROM games WHERE gametype = 'decoy';";
    // const decoyQuery = client.query(decoyQueryString);
    // decoyQuery.on('row', (row) => {
    //   decoyResults.push(row);
    // });

    answerQuery.on('end', () => {
        if(gameAnswer.solution === gameResponse.img){
          var authenticate = true
        } else {
          var authenticate = false
        };
        callback(authenticate);
        done();
      });
    });
  });
};

module.exports = getGameData;
