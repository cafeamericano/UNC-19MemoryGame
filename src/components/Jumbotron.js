import React, { Component } from "react";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Clicky Game</h1>
          <p className="lead">
            Click as many fruits as you can without clicking the same one twice.
          </p>
        </div>
      </div>
    );
  };
}

export default Jumbotron;
