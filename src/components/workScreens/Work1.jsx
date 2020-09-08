import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import sklogo from "../../assets/sklogo.png";
class Work1 extends Component {
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
      <div
        className={`fullheight fullwidth unselectable`}
        style={getStyle(
          inViewport,
          enterCount,
          {
            fontSize: big ? "6em" : small ? "4em" : "3em",
            ...staticStyle,
          },
          "slideright fadein"
        )}
      >
        <p>Click to see what I made!</p>
        <a
          href="https://mobile-issuer-demo.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverbrightness"
        >
          <img
            src={sklogo}
            alt="SK"
            style={{ width: big ? "300px" : small ? "300px" : "300px" }}
          />
        </a>
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Work1), { rootMargin: "-1px" })
);
