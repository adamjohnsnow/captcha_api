var getMain = function(){
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection Errors
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    };

    var queryString = "SELECT * FROM games WHERE gametype = 'imgAssoc'";
    const query = client.query(queryString);
    query.on('row', (row) => {
      results.push(row);
    });

    query.on('end', () => {
      done();
    });

    return results[Math.floor(Math.random() * results.length)];
    console.log(results[Math.floor(Math.random() * results.length)]);
  });
};
