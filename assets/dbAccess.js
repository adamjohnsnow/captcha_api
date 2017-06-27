const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/captcha_api_dev'


var getMain = function(minigame){
  var results = []
  var resulr = null

  pg.connect(connectionString, (err, client, done) => {
    // Handle connection Errors
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    };

    var queryString = "SELECT * FROM games WHERE gametype = '"+minigame+"';";
    const query = client.query(queryString);
    query.on('row', (row) => {
      results.push(row);
    });

    query.on('end', () => {
      result = results[Math.floor(Math.random() * results.length)]
      module.exports = result;
      done();
    });
  });
};

module.exports = getMain;
