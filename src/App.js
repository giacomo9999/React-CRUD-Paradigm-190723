import React, { Component } from "react";
import Table from "./Table";
import "./App.css";

const App = () => {
  const birds = [
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
  ];

  return (
    <div className="container-primary">
      <h3>App Component</h3>
      <Table birdList={birds} />
    </div>
  );
};

export default App;
