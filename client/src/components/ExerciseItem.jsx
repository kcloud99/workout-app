import React from 'react';

var ExerciseItem = (props) => (
  <div className="Exercise-Item">
    <h4 className="Exercise-title">{props.exercise}</h4>
    <p>Description Goes Here</p>
    <div>
    <span>Category Name</span>
    <span>Exercise Type</span>
    </div>
  </div>
);

export default ExerciseItem;