import React, { Component } from "react";

class Form extends Component {
  state = {
    birdId: 999,
    birdName: "",
    birdHabitat: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onHandleSubmit = e => {
    console.log("Handling Submit...");
    this.props.handleSubmit(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div className="container-inner-tight">
        <form className="h-form">
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
