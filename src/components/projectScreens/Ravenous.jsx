import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Tooltip } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import ravenous from "../../assets/ravenous.ico";
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
          Ravenous
        </h1>
        <p
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: "clamp(1em, 3vw, 2em)",
              ...staticStyle,
            },
            "slideup fadein"
          )}
        >
          Ravenous is a part of a Codecademy course that I did over the summer.
          A user can search for a type of food or business in a location and
          find relevant businesses and their reviews.
          <br />
          Made using{" "}
          <span
            style={{
              color: "#D32323",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            Yelp's API
          </span>
          , this was the first React web application that I ever built
        </p>
        <div
          style={{ margin: "10px", justifyContent: "center", display: "flex" }}
        >
          <Tooltip title="Check it out!">
            <a
              href="https://trevravenous.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ravenous} alt="logo" />
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
