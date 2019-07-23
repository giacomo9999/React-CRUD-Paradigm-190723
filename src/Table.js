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
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>100</td>
        <td>Scarlet Tanager</td>
        <td>North America</td>
      </tr>
    </tbody>
  );
};

const Table = () => {
  return (
    <div className="container-secondary">
      <h3>Bird Table</h3>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
