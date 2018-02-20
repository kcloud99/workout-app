import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ExerciseList from './components/ExerciseList.jsx';
import AddExercise from './components/AddExercise.jsx';
//import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      workout:[],
      username: ''
    }

  }


  componentDidMount () {
    fetch('/exercises')
    .then(exercises => exercises.json())
    .then((exercises) => this.setState({exercises}));
  }

  addNewExercise (newExercise) {
    console.log(JSON.stringify(newExercise), ' was added');
    let thisState = this.setState.bind(this);
    $.post('/exercise', JSON.stringify(newExercise), function(data) {
      console.log(data.name);
      //thisState.exercises.push(data);
      // TODO
      // UPDATE EXERCISE LIST RENDERED ON PAGE
    //   fetch('/exercises')
    //   .then(exercises => exercises.json())
    //   .then((exercises) => this.setState({exercises}));
    });
  }

  // handleSignup (e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // handleLogin (e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // addUser () {
  //   // TODO: POST USERNAME TO DATABASE
  // }
  // login () {
  //   // TODO: GET SAVED WORKOUTS FROM DATABASE
  // }

  render() {
    return(
      <div className="App">
        <div className="title">
          <h1>My <em>(broken)</em> Workout App</h1>
        </div>
        <div className="header">
          <label>
            Signup:
            <input name="signup" value={this.state.username} onChange={this.handleSignup} />
            <input type="button" value="GO" onClick={this.addUser} />
          </label>
          <br />
          or
          <br />
          <label>
            Login:
            <input name="login" value={this.state.username} onChange={this.handleLogin} />
            <input type="button" value="GO" onClick={this.login} />
          </label>
        <br />
        <hr />
        <hr />
        </div>
        <AddExercise className="add-exercise" onAdd={this.addNewExercise.bind(this)} />
        <br />
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