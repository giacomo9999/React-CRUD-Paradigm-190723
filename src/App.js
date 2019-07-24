import React, { Component } from "react";
import Table from "./Table";
import FormOrButton from "./FormOrButton";
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
        birdName: "Mid-Level Manager",
        birdHabitat: "Urban Office"
      },
      {
        birdId: 105,
        birdName: "Blue Jay",
        birdHabitat: "Open Woodland"
      },
      {
        birdId: 106,
        birdName: "Yellow-Bellied Sapsucker",
        birdHabitat: "South Brooklyn"
      }
    ],

    nextId: 107,
    formOpen: false,
    isEdit: false,

    editData: {
      birdId: "",
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
    if (this.state.formOpen) {
      alert("Form already open - Close form and try again");
    } else {
      const birdToEdit = this.state.birds.filter(entry => entry.birdId === id);
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
    }
  };

  handleUpdateSubmit = dataFromForm => {
    console.log("Handling update submission..." + dataFromForm.birdName);
    const updatedBirds = this.state.birds.map(entry => {
      if (entry.birdId === dataFromForm.birdId) {
        return dataFromForm;
      } else {
        return entry;
      }
    });
    this.setState({
      birds: updatedBirds,
      formOpen: false,
      editData: {
        birdId: "",
        birdName: "",
        birdHabitat: ""
      }
    });
  };

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
    this.setState({ formOpen: true, isEdit: false });
  };

  handleCloseForm = () => {
    console.log("Closing form...");
    this.setState({
      formOpen: false,
      editData: {
        birdId: "",
        birdName: "",
        birdHabitat: ""
      }
    });
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
        <FormOrButton
          handleCreateSubmit={this.handleCreateSubmit}
          handleUpdateSubmit={this.handleUpdateSubmit}
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
