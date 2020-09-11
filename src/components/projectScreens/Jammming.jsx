import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Tooltip } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import LogoIosMusicalNotes from "react-ionicons/lib/IosMusicalNotes";

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
          Ja{" "}
          <span
            style={{
              color: "#6c41ec",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            mmm
          </span>
          ing
        </h1>
        <p
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: "clamp(1em, 3vw, 2em)",
              ...staticStyle,
            },
            "slideup slideleft fadein"
          )}
        >
          Jammming is the final project of the React Codecademy course. A user
          can make and save a Spotify playlist to their Spotify account.
          <br />
          Made using{" "}
          <span
            style={{
              color: "#1DB954",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Spotify's API
          </span>
          <br />I received a{" "}
          <Tooltip title="Check it out!">
            <a
              className="hoverbrightness"
              style={{
                color: "orange",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                // textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.credential.net/926c2aa2-c35e-4075-b660-c94c001249e3#gs.f5s5by"
            >
              {" "}
              Codecademy-issued Certificate
            </a>
          </Tooltip>
        </p>
        <div
          style={{ margin: "10px", justifyContent: "center", display: "flex" }}
        >
          <Tooltip title="Check it out!">
            <a
              href="https://trevjammming.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoIosMusicalNotes
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",

                  //   height: "100%",
                  //   width: "100%",
                }}
                fontSize="400px"
                color="#6C41EC"
              />
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
