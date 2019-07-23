import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
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
    ]
  };

  handleDelete = id => {
    console.log("Deleting bird ID#" + id);
    const newState = this.state.birds.filter(entry => entry.birdId !== id);
    this.setState({ birds: newState });
  };

  handleEdit = id => {
    console.log("Editing bird ID#" + id);
  };

  handleSubmit = e => {
    console.log("Submitting new bird...");
    console.log(e.target.birdName.value, e.target.birdHabitat.value);
    e.preventDefault();
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
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
