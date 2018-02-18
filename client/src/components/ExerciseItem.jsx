import React from 'react';

const ExerciseItem = (props) => (
  <div className="Exercise-Item">
  <hr />
    <h4 className="Exercise-title">{props.exercise.name}</h4>
    <p>{props.exercise.description}</p>
    <div>
    <span><b>Category:</b> {props.exercise.category.name}</span>
    <span>  ||  </span>
    <span><b>Exercise Type:</b> {props.exercise.type}</span>
    <hr />
    </div>
  </div>
);

export default ExerciseItem;