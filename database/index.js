const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/workout');

let exerciseSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  description: String,
  category: {
    id: Number,
    name: String
  },
  type: String,
  sets: Number,
  reps: Number,
  weight: Number
});

let Exercise = mongoose.model('Exercise', exerciseSchema);

let workoutSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  exercises: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]
  //createdAt: Timestamp
});

let Workout = mongoose.model('Workout', workoutSchema);

let userSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  username: String,
  password: String,
  _workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}]
});

let User = mongoose.model('User', userSchema);


let saveExercise = (exercise) => {
  let data = {
    id: exercise.id,
    name: exercise.name,
    description: exercise.description,
    category: {
      id: exercise.category.id,
      name: exercise.category.name
    },
    type: exercise.type,
    sets: exercise.sets,
    reps: exercise.reps,
    weight: exercise.weight
  };
  
  Exercise.create(data, function(err, exercise_instance) {
    if (err) {
      console.log('Error saving to db', err);
    } else {
      console.log('Save successful', exercise_instance);
    }
  });
};

let saveWorkout = (workout) => {
  let data = {
    id: {type: Number, unique: true},
    name: String,
    exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
    //createdAt: Timestamp
  };
  
  Exercise.create(data, function(err, exercise_instance) {
    if (err) {
      console.log('Error saving to db', err);
    } else {
      console.log('Save successful', exercise_instance);
    }
  });
};

let saveUser = (exercise) => {
  let data = {
    id: {type: Number, unique: true},
    username: String,
    password: String,
    _workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}]
  };
  
  Exercise.create(data, function(err, exercise_instance) {
    if (err) {
      console.log('Error saving to db', err);
    } else {
      console.log('Save successful', exercise_instance);
    }
  });
};

let getExercisesFromDb = () => {
  Exercise.
  find().
  sort({category: {id: -1}}).
  exec(callback)
};




module.exports.Exercise = Exercise;
module.exports.saveExercise = saveExercise;
module.exports.saveWorkout = saveWorkout;
module.exports.saveUser = saveUser;
module.exports.getExercisesFromDb = getExercisesFromDb;












