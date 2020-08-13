import React, { Component } from "react";
import "../styles/Screen.css";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Theme";
export default class Screen extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <div ref={this.props.refProp} className="screen container">
          {this.props.id}
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}
