const express = require('express');
let app = express();
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/exercises', function(req, res) {
  db.getExercisesFromDb(function(err, data) {
    if(err) {
      console.log('Error getting exercises', err);
    }
    res.send(data);
  });
});

  app.listen(3000, function() {
    console.log('listening on port 3000');
  });