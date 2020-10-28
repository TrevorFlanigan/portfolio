import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Tooltip } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import sklogo from "../../assets/sklogo.png";
class SecureKey extends Component {
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
            fontSize: "clamp(1em, 4vw, 4em)",
            ...staticStyle,
          },
          "slideright fadein"
        )}
      >
        <h2>At SecureKey... </h2>
        <p>
          I built a web app that demonstrates the issuance and verification of
          digital identification.{" "}
        </p>
        {/* <Tooltip title="Check it out!">
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
        </Tooltip> */}
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(SecureKey), { rootMargin: "-1px" })
);
