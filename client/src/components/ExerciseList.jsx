import React from 'react';
import ExerciseItem from './ExerciseItem.jsx';

var ExerciseList = (props) => (
  <div>
  <h3>All Exercises</h3>
  {props.exercises.map((exercise, i) => <ExerciseItem key={i} exercise={exercise}/>)}
  </div>
);



export default ExerciseList;