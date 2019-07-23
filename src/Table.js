import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Bird Name</th>
        <th>Habitat</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  console.log("Props:", props.birdList.map(entry => entry.birdName));
  let birdRows = props.birdList.map(entry => {
    return (
      <tr key={entry.birdId}>
        <td>{entry.birdId}</td>
        <td>{entry.birdName}</td>
        <td>{entry.birdHabitat}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{birdRows}</tbody>;
};

class Table extends Component {
  render() {
    return (
      <div className="container-secondary">
        <h3>Bird Table</h3>
        <table>
          <TableHead />
          <TableBody birdList={this.props.birdList} />
        </table>
      </div>
    );
  }
}

export default Table;
