import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import ToggleableForm from "./ToggleableForm";
import "./App.css";

class App extends Component {
  state = {
    birds: [
      {
        birdId: 100,
        birdName: "Black-Capped Chickadee",
        birdHabitat: "Mature Forest"
      },
      {
        birdId: 101,
        birdName: "American Goldfinch",
        birdHabitat: "Grassland"
      },
      {
        birdId: 102,
        birdName: "Indigo Bunting",
        birdHabitat: "Open Woodland"
      },
      {
        birdId: 103,
        birdName: "Scarlet Tanager",
        birdHabitat: "Mature Forest"
      },
      {
        birdId: 104,
        birdName: "Blue Jay",
        birdHabitat: "Open Woodland"
      }
    ],
    editFormOpen: false
  };

  handleDelete = id => {
    console.log("Deleting bird ID#" + id);
    const newState = this.state.birds.filter(entry => entry.birdId !== id);
    this.setState({ birds: newState });
  };

  handleEdit = id => {
    console.log("Editing bird ID#" + id);
    this.setState({ editFormOpen: true });
  };

  handleSubmit = dataFromForm => {
    console.log("Submitting new bird..." + dataFromForm);
    this.setState({ birds: [...this.state.birds, dataFromForm] });
    console.log(this.state);
  };

  openForm = () => {
    console.log("Opening form...");
    this.setState({ editFormOpen: true });
  };

  closeForm = () => {
    console.log("Closing form...");
    this.setState({ editFormOpen: false });
  };

  render() {
    return (
      <div className="container-outer">
        <h3>App Component</h3>
        <Table
          birdList={this.state.birds}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        <ToggleableForm
          handleSubmit={this.handleSubmit}
          openForm={this.openForm}
          closeForm={this.closeForm}
          isFormOpen={this.state.editFormOpen}
        />
      </div>
    );
  }
}

export default App;
