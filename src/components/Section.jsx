import React, { Component } from "react";
import "../styles/Section.css";
export default class Section extends Component {
  render() {
    return <div className="section container">{this.props.children}</div>;
  }
}
