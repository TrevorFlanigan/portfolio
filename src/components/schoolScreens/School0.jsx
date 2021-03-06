import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
class Home0 extends Component {
  state = {
    loaded: "",
  };

  render() {
    const { inViewport, enterCount, theme } = this.props;
    const staticStyle = {
      transition: "font-size 1s, background-color 2s, color 2s",
      textAlign: "center",
      color: theme.palette.primary.contrastText,
    };
    let big = isWidthUp("md", this.props.width);
    let small = isWidthUp("sm", this.props.width);
    return (
      <h1
        className={`fullheight fullwidth unselectable`}
        style={getStyle(
          inViewport,
          enterCount,
          {
            fontSize: big ? "6em" : small ? "4em" : "3em",
            ...staticStyle,
          },
          "slideup slideleft fadein"
        )}
      >
        I'm a Computer Engineering Student at{" "}
        <span
          style={{
            color: "#000B3F",
            textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
          }}
        >
          UBC
        </span>{" "}
      </h1>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Home0), { rootMargin: "-1px" })
);
