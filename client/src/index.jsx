import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ExerciseList from './components/ExerciseList.jsx';
import AddExercise from './components/AddExercise.jsx';
// import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      workout:[]
    }
  }

  componentWillMount () {
    fetch('/exercises')
    .then(exercises => exercises.json())
    .then((exercises) => this.setState({exercises}));
  }

  addNewExercise (newExercise) {
    let thisState = this.state.bind(this);
    fetch('/exercise', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(thisState.newExercise)
    })
  }

  render() {
    return(
      <div className="App">
        <AddExercise onAdd={this.addNewExercise.bind(this)} />
        <hr />
        <hr />
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