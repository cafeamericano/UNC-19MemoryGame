import React, { Component } from "react";

var style = { transform: "scale(2)" };

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div className="col-4">
        <div
          className="card p-3 mb-3 text-center"
          onClick={() => this.props.handleClick(this.props.id)}
        >
          <div style={style}>{this.props.content}</div>
        </div>
      </div>
    );
  };
}

export default Card;
