import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
class Home1 extends Component {
  render() {
    const { inViewport, enterCount, theme } = this.props;
    const staticStyle = { transition: "font-size 1s", textAlign: "center" };
    let big = isWidthUp("md", this.props.width);
    let small = isWidthUp("sm", this.props.width);
    return (
      <h1
        className={`fullheight fullwidth unselectable`}
        style={getStyle(
          inViewport,
          enterCount,
          {
            fontSize: big ? "9em" : small ? "6em" : "4em",
            ...staticStyle,
            color: theme.palette.primary.contrastText,
          },
          "slideright fadein"
        )}
      >
        I'm Trevor
      </h1>
    );
  }
}

export default withTheme(withWidth()(handleViewport(Home1)));
