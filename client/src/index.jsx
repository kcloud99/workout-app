import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ExerciseList from './components/ExerciseList.jsx';
// import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: ['exercise1', 'exercise2', 'exercise3'],
      workout:[]
    }
  }

  render() {
    return(
      <div className="App">
        <div className="Workout-container">
        </div>
        <div className="Exercise-container">
          <ExerciseList exercises={this.state.exercises} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));