import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <nav className="navbar navbar-dark bg-primary text-light">
        <h5>Clicky Game</h5> <p>Score: {this.props.score}</p>
        <p>High Score: {this.props.highScore}</p>
      </nav>
    );
  };
}

export default Navbar;
