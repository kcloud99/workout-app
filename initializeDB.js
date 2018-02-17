// Initialized database with data,
// run once from command line to get data into db
// Never run again

const initialize = require('./database/index.js');
const exerciseData = require('./data.json');


// let loadInitialData
//const exercises = JSON.parse(exerciseData);
initialize.Exercise.create(exerciseData, function(err, data) {
  if (err) {
    console.log('Error loading initial data', err);
  } else {
    console.log('Initial data loaded successfully', data);
  }
});

