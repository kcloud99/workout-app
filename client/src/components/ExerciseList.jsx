import React from 'react';
import ExerciseItem from './exerciseItem.jsx';

var ExerciseList = (props) => (
  <div>
  <h3>All Exercises</h3>
  {props.exercises.map(exercise => <ExerciseItem key={exercise.id} exercise={exercise}/>)}
  </div>
);



export default ExerciseList;