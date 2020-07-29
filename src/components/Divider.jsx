import React, { Component } from "react";
import "../styles/Divider.css";
export default class Divider extends Component {
  render() {
    return <div className="divider container">{this.props.children}</div>;
  }
}
