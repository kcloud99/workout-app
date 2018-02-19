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

// app.get('/workouts', function(req, res) {
//   TODO: GET ALL WORKOUTS ATTACHED TO A USERNAME
// });

app.post('/exercise', function(req, res) {
  req.on('data', function(chunk) {
    let body = chunk.toString();
    //db.saveExercise(body)
    console.log('New Exercise sent to server', body);
    res.send(JSON.parse(body));
  });
});

// app.post('/user', function(req, res) {
//   TODO: ADD USER TO DATABASE
// });

// app.post('/workout', function(req, res) {
//   TODO: ADD WORKOUT TO DATABASE UNDER USERNAME
//     IF NO USERNAME: SEND BACK "PLEASE LOGIN"
// });

app.listen(3000, function() {
  console.log('listening on port 3000');
});