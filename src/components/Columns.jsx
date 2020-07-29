import React, { Component } from "react";
import "../styles/Columns.css";
export default class Columns extends Component {
  render() {
    return (
      <div className="columns container">
        <div className="column-0 c">{this.props.children[0]}</div>
        <div className="column-1 c">{this.props.children[1]}</div>
        <div className="column-2 c">{this.props.children[2]}</div>
      </div>
    );
  }
}
