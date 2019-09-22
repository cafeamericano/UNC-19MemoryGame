import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <nav className="navbar navbar-dark bg-warning text-dark shadow">
        <h6>Current Score: {this.props.score}</h6>
        <h6>High Score: {this.props.highScore}</h6>
      </nav>
    );
  };
}

export default Navbar;
