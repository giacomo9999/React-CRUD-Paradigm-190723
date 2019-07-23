import React, { Component } from "react";
import Table from "./Table";
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

    nextId: 105,
    formOpen: false,
    isEdit: false,

    editData: {
      birdId: -999,
      birdName: "",
      birdHabitat: ""
    }
  };

  handleDelete = id => {
    console.log("Deleting bird ID#" + id);
    const newState = this.state.birds.filter(entry => entry.birdId !== id);
    this.setState({ birds: newState });
  };

  handleEdit = id => {
    let birdToEdit = this.state.birds.filter(entry => entry.birdId === id);
    console.log("Editing bird ID#" + id);
    this.setState({
      formOpen: true,
      isEdit: true,
      editData: {
        birdId: birdToEdit[0].birdId,
        birdName: birdToEdit[0].birdName,
        birdHabitat: birdToEdit[0].birdHabitat
      }
    });
  };

  handleUpdateSubmit() {
    console.log("Handling update submission...");
  }

  handleCreateSubmit = dataFromForm => {
    console.log("Submitting new bird..." + dataFromForm);
    this.setState({
      birds: [...this.state.birds, dataFromForm],
      nextId: this.state.nextId + 1,
      formOpen: false
    });
    console.log(this.state);
  };

  handleOpenForm = () => {
    console.log("Opening form...");
    this.setState({ formOpen: true });
  };

  handleCloseForm = () => {
    console.log("Closing form...");
    this.setState({ formOpen: false });
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
          handleCreateSubmit={this.handleCreateSubmit}
          handleOpenForm={this.handleOpenForm}
          handleCloseForm={this.handleCloseForm}
          isFormOpen={this.state.formOpen}
          nextId={this.state.nextId}
          isEdit={this.state.isEdit}
          birdData={this.state.editData}
        />
      </div>
    );
  }
}

export default App;
