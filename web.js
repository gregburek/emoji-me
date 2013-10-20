var express = require("express");
var pg = require('pg').native;

var app = express();
app.configure(function () {
  app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
  app.use(express.bodyParser());
});

app.get('/', function(request, response) {

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    if (err) throw err;
    client.query('SELECT emoji FROM emoji ORDER BY RANDOM() LIMIT 1', function(err, result) {
      done();
      response.send(result.rows[0].emoji);
      if(err) return console.error(err);
      console.log(result.rows);
    });
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
