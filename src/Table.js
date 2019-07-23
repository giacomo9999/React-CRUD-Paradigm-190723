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
          <button onClick={()=>props.handleEdit(entry.birdId)}>Edit</button>
        </td>
        <td>
          <button onClick={()=>props.handleDelete(entry.birdId)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{birdRows}</tbody>;
};

const Table = props => {
  return (
    <div className="container-inner">
      <h3>Bird Table</h3>
      <table>
        <TableHead />
        <TableBody birdList={props.birdList} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>
      </table>
    </div>
  );
};

export default Table;
