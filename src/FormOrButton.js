import React, { Component } from "react";
import Form from "./Form";

class FormOrButton extends Component {
  render() {
    return (
      <div className="container-inner">
        {this.props.isFormOpen ? (
          <div>
            <h3>Form</h3>
            <Form
              handleCreateSubmit={this.props.handleCreateSubmit}
              handleUpdateSubmit={this.props.handleUpdateSubmit}
              nextId={this.props.nextId}
              birdData={this.props.birdData}
              isEdit={this.props.isEdit}
            />
            <button onClick={this.props.handleCloseForm}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.props.handleOpenForm}>Add New Bird</button>
        )}
      </div>
    );
  }
}

export default FormOrButton;
