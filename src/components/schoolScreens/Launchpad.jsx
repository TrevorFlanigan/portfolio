import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Tooltip } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import rocket from "../../assets/rocket.png";
class Launchpad extends Component {
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
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          className={`fullheight fullwidth unselectable`}
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: "clamp(1em, 7vw, 4em)",
              ...staticStyle,
            },
            "slideup slideleft fadein"
          )}
        >
          I'm a developer for UBC Launchpad!
        </h1>
        <p
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: "clamp(1em, 3vw, 2em)",
              ...staticStyle,
            },
            "slidedown slideright fadein"
          )}
        >
          Launchpad is a UBC Software Engineering Design Team
          <br />
          We meet weekly and follow Agile project management principles. It's a
          great space to take risks and try to build something fascinating
          together!
        </p>
        <div
          style={{ margin: "10px", justifyContent: "center", display: "flex" }}
        >
          <Tooltip title="Check it out!">
            <a
              href="https://www.ubclaunchpad.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="hoverbrightness" src={rocket} alt="logo" />
            </a>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Launchpad), { rootMargin: "-1px" })
);
