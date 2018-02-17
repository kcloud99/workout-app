import React from 'react';
import ExerciseItem from './exerciseItem.jsx';

var ExerciseList = (props) => (
  <div>Exercise List goes here
  {props.exercises.map((exercise, i) => <ExerciseItem key={i} exercise={exercise}/>)}
  </div>
);



export default ExerciseList;