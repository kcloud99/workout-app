import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ExerciseList from './components/ExerciseList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: ['exercise1', 'exercise2', 'exercise3']
    }
  }

  render() {
    return(
      <div className="App-class">
        <ExerciseList exercises={this.state.exercises} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));