import React from 'react';

class AddExercise extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      type: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleType = this.handleType.bind(this);
    this.addExercise = this.addExercise.bind(this);
  }

  handleName (e) {
    this.setState({
      name: e.target.value
    });
  }
  handleDescription (e) {
    this.setState({
      description: e.target.value
    });
  }
  handleCategory (e) {
    this.setState({
      category: e.target.value
    });
  }
  handleType (e) {
    this.setState({
      type: e.target.value
    });
  }


  addExercise() {
    this.props.onAdd(this.state);
    this.clearNewExercise();
  }

  logNewExercise() {
    console.log(JSON.stringify(this.state));
  }

  clearNewExercise() {
    this.setState({
      name: '',
      description: '',
      category: '',
      type: ''
    });
  }

  addToWorkout() {
    // TODO: ADD EXERCISE TO WORKOUT WHEN NAME IS CLICKED ON
  }

  render () {
    return (
      <div className="Add-Exercise">
      <h3>Add New Exercise:</h3>
        <form>
          <label>
            Name: 
            <input name="name" value={this.state.name} onChange={this.handleName} />
          </label>
          <span>  </span>
          <label>
            Description: 
            <textarea name="description" value={this.state.description} onChange={this.handleDescription} />
          </label>
          <span>  </span>
          <label>
            Category: 
            <select name="category" value={this.state.category} onChange={this.handleCategory}>
              <option value="choose">Choose:</option>
              <option value="Legs">Legs</option>
              <option value="Back">Back</option>
              <option value="Chest">Chest</option>
              <option value="Arms/Shoulders">Arms/Shoulders</option>
              <option value="Plyometrics">Plyometrics</option>
            </select>
          </label>
          <span>  </span>
          <label>
            Exercise Type: 
            <select name="type" value={this.state.type} onChange={this.handleType}>
              <option value="choose">Choose:</option>
              <option value="compound">Compound</option>
              <option value="isolated">Isolated</option>
            </select>
          </label>
          <input type="button" value="Add" onClick={this.addExercise} />>
        </form>
      </div>
    )
  }
}



export default AddExercise;