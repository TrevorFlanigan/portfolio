import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "./GetStyle";
class ContentScreen extends Component {
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
            fontSize: big
              ? this.props.bigFont || "6em"
              : small
              ? this.props.mediumFont || "4em"
              : this.props.smallFont || "3em",
            ...staticStyle,
          },
          this.props.transition
        )}
      >
        {this.props.children}
      </h1>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(ContentScreen), { rootMargin: "-1px" })
);
