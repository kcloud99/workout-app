import React from 'react';

class AddExercise extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      newExercise: {
        name: '',
        description: '',
        category: '',
        type: ''
      }
    };
  }

  // onAdd (e) {
  //   this.setState({
  //     newExercise: {
  //       name: e.target.value...
  //     }
  //   });
  // }

  logNewExercise(e) {
    console.log(e.target.value);
  }

  addExercise() {
    this.setState({newExercise: {
      name: e.target.value
    }})
    .then(this.props.onAdd(this.state.newExercise))
    .then(this.clearNewExercise());
  }

  clearNewExercise() {
    this.setState({
      newExercise: {
        name: '',
        description: '',
        category: '',
        type: ''
      }
    });
  }

  render () {
    return (
      <div className="Add-Exercise">
        <form onSubmit={this.logNewExercise}>
          <label>
            Name: 
            <input value={this.state.newExercise.name} />
          </label>
          <label>
            Description: 
            <textarea value={this.state.newExercise.description} />
          </label>
          <label>
            Category: 
            <input value={this.state.newExercise.category} />
          </label>
          <label>
            Exercise Type: 
            <input value={this.state.newExercise.type} />
          </label>
          <input type="submit" value="Add" onClick={this.addExercise.bind(this)} />>
        </form>
      </div>
    )
  }
}



export default AddExercise;