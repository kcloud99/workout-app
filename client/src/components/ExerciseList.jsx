import React from 'react';

var ExerciseList = (props) => (
  <div>Exercise List goes here
  {props.exercises.map((exercise, i) => <li key={i}>{exercise}</li>)}
  </div>
);



export default ExerciseList;