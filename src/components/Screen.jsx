import React, { Component } from "react";
import "../styles/Screen.css";
export default class Screen extends Component {
  render() {
    return <div className="screen container">{this.props.children}</div>;
  }
}
