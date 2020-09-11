import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Tooltip } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import sync from "../../assets/sync.svg";
class Sync extends Component {
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
          Sync
        </h1>
        <p
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: "clamp(1em, 3vw, 2em)",
              ...staticStyle,
            },
            "slidedown slideleft fadein"
          )}
        >
          Sync is a UBC Launchpad Project that allows users to watch videos over
          the internet synchronously
          <br />
          Built using{" "}
          <span
            style={{
              color: "grey",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Socket.io
          </span>
          ,{" "}
          <span
            style={{
              color: "#3178C6",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Typescript
          </span>
          ,{" "}
          <span
            style={{
              color: "#A42122",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Redis
          </span>
          ,{" "}
          <span
            style={{
              color: "#53C1DE",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            React.js
          </span>
          ,{" "}
          <span
            style={{
              color: "#539E43",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Node.js
          </span>
          , and{" "}
          <span
            style={{
              color: "orange",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Express
          </span>
        </p>
        <div
          style={{ margin: "10px", justifyContent: "center", display: "flex" }}
        >
          <Tooltip title="Check it out!">
            <a
              href="https://sync.ubclaunchpad.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sync} alt="logo" />
            </a>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Sync), { rootMargin: "-1px" })
);
