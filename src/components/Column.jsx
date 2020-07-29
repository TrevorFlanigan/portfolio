import React, { Component } from "react";
import "../styles/Columns.css";

export default class Column extends Component {
  render() {
    return <div className="column c">{this.props.children}</div>;
  }
}
