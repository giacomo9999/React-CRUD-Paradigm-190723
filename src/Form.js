import React, { Component } from "react";

const Form = props => {
  return (
    <div className="container-inner">
      <form onSubmit={props.handleSubmit}>
        <label className="light">Bird Name</label> <br />
        <input type="text" name="birdName" />
        <div className="spacer10" />
        <label className="light">Bird Habitat</label> <br />
        <input type="text" name="birdHabitat" />
        <div className="spacer10" />
        <button type="submit">Add New Bird</button>
      </form>
    </div>
  );
};

export default Form;
