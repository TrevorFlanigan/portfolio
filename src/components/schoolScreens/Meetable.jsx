import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Tooltip } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import meetableLogo from "../../assets/meetableLogo.svg";
class Meetable extends Component {
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
          I'm a co-founder of Meetable!
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
          Meetable is a student startup designed to connect students despite
          COVID-19's impacts
          <br />
          We started building the project in August 2020, and had an MVP
          prepared by September 2020.
        </p>
        <div
          style={{ margin: "10px", justifyContent: "center", display: "flex" }}
        >
          <Tooltip title="Check it out!">
            <a
              href="https://www.gomeetable.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="100%"
                className="hoverbrightness"
                src={meetableLogo}
                alt="logo"
              />
            </a>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Meetable), { rootMargin: "-1px" })
);
