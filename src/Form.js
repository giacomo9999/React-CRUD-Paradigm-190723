import React, { Component } from "react";

class Form extends Component {
  state = {
    birdId: this.props.nextId,
    birdName: "",
    birdHabitat: ""
  };

  componentDidMount() {
    if (this.props.isEdit) {
      console.log("Editing mode...");
      this.setState({
        birdId: this.props.birdData.birdId,
        birdName: this.props.birdData.birdName,
        birdHabitat: this.props.birdData.birdHabitat
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onHandleSubmit = e => {
    let initialState = {
      birdId: "",
      birdName: "",
      birdHabitat: ""
    };

    console.log("Handling Submit...");
    this.props.handleCreateSubmit(this.state);
    this.setState(initialState);
    e.preventDefault();
  };

  render() {
    console.log("Form Props...",this.props);
    return (
      <div className="container-inner-tight">
        <form className="h-form">
          <h4>{`ID# ${this.state.birdId}`}</h4>
          <label className="h-label">Bird Name</label>
          <input
            className="h-input"
            type="text"
            name="birdName"
            value={this.state.birdName}
            onChange={this.handleChange}
          />
          <div className="spacer10" />
          <label className="h-label">Bird Habitat</label>
          <input
            className="h-input"
            type="text"
            name="birdHabitat"
            value={this.state.birdHabitat}
            onChange={this.handleChange}
          />
          <button className="h-btn" onClick={this.onHandleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
