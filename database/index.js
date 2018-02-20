const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/workout');

let exerciseSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: {
    id: Number,
    name: String
  },
  type: String,
  sets: Number,
  reps: Number,
  weight: Number,
  createdAt: {type: Date, default: Date.now}
});

let Exercise = mongoose.model('Exercise', exerciseSchema);

// let workoutSchema = mongoose.Schema({
//   name: String,
//   exercises: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}],
//   createdAt: {type: Date, default: Date.now}
// });

// let Workout = mongoose.model('Workout', workoutSchema);

// let userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   _workouts: [Schema.Types.ObjectId],
//   createdAt: {type: Date, default: Date.now}
// });

// let User = mongoose.model('User', userSchema);


let saveExercise = (exercise) => {
  console.log('Exercise in save function', exercise);
  // let data = {
  //   name: exercise['name'],
  //   description: exercise['description'],
  //   category: {
  //     name: exercise.category
  //   },
  //   type: exercise.type,
  // };

  console.log('Data in save function', exercise);
  
  Exercise.create(JSON.parse(exercise), function(err, exercise_instance) {
    if (err) {
      console.log('Error saving to db', err);
    } else {
      console.log('Save successful', exercise_instance);
    }
  });
};

// let saveWorkout = (workout) => {
//   // let data = {
//   //   id: {type: Number, unique: true},
//   //   name: String,
//   //   exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
//   //   createdAt: new Date
//   // };
//   let w = new Workout();
//   w.name = workout.name;
//   workout.exercises.forEach(exercise => {
//     w.exercises.push(exercise);
//   });
//   w.createdAt = new Date();
//   console.log('Workout to save: ', w);
//   w.save();
// };

// let saveUser = (exercise) => {
//   let data = {
//     id: {type: Number, unique: true},
//     username: String,
//     password: String,
//     _workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}],
//     createdAt: new Date
//   };
  
//   Exercise.create(data, function(err, exercise_instance) {
//     if (err) {
//       console.log('Error saving to db', err);
//     } else {
//       console.log('Save successful', exercise_instance);
//     }
//   });
// };

let getExercisesFromDb = (callback) => {
  Exercise.
  find().
  exec(callback);
};

// let getWorkoutsFromDb = (callback) => {
//   Workout.
//   find().
//   exec(callback);
// }




module.exports.Exercise = Exercise;
module.exports.saveExercise = saveExercise;
// module.exports.saveWorkout = saveWorkout;
// module.exports.saveUser = saveUser;
module.exports.getExercisesFromDb = getExercisesFromDb;
// module.exports.getWorkoutsFromDb = getWorkoutsFromDb;












