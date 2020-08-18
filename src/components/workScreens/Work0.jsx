import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import a from "indefinite";
class Work0 extends Component {
  state = {
    loaded: "",
  };

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
            fontSize: big ? "8em" : small ? "6em" : "3em",
            ...staticStyle,
            color: theme.palette.primary.contrastText,
          },
          "slideup slideleft fadein"
        )}
      >
        I am {a(process.env.REACT_APP_JOB_TITLE) + " "} at
        {" " + process.env.REACT_APP_COMPANY}
      </h1>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Work0), { rootMargin: "-1px" })
);
