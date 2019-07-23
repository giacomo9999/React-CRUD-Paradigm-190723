import React, { Component } from "react";
import Form from "./Form";

class ToggleableForm extends Component {
  state = { formOpen: false };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  render() {
    return (
      <div className="container-inner">
        {this.state.formOpen ? (
          <Form handleSubmit={this.props.handleSubmit} />
        ) : (
          <button onClick={this.openForm}>Open Form</button>
        )}
      </div>
    );
  }
}

export default ToggleableForm;
