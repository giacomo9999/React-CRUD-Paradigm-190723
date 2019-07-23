import React, { Component } from "react";
import Form from "./Form";

class ToggleableForm extends Component {
  render() {
    return (
      <div className="container-inner">
        {this.props.isFormOpen ? (
          <div>
            <h3>Form</h3>
            <Form handleSubmit={this.props.handleSubmit} />
            <button onClick={this.props.closeForm}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.props.openForm}>Add New Bird</button>
        )}
      </div>
    );
  }
}

export default ToggleableForm;
