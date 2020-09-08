import React, { Component } from "react";
import { withTheme, withWidth, isWidthUp, Button } from "@material-ui/core";
import handleViewport from "react-in-viewport";
import getStyle from "../GetStyle";
import robot1 from "../../assets/robot1.mp4";
import linerobot2 from "../../assets/linerobot2.mp4";
import linerobot3 from "../../assets/linerobot3.mp4";
import linerobot4 from "../../assets/linerobot4.mp4";

import dancingrobot1 from "../../assets/dancingrobot1.mp4";

class Home0 extends Component {
  state = {
    loaded: "",
    vid: 1,
  };

  render() {
    const { inViewport, enterCount, theme } = this.props;
    const staticStyle = {
      transition: "font-size 1s, background-color 2s, color 2s",
      textAlign: "center",
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
    };
    let big = isWidthUp("md", this.props.width);
    let small = isWidthUp("sm", this.props.width);
    return (
      <>
        <h1
          className={`fullheight fullwidth unselectable`}
          style={getStyle(
            inViewport,
            enterCount,
            {
              fontSize: big ? "3em" : small ? "2em" : "1em",
              alignItems: "center",
              ...staticStyle,
            },
            "slideup slideleft fadein"
          )}
        >
          Cool School Projects
        </h1>
        <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
          {big && (
            <div
              style={{
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                flexGrow: 1,
                color: theme.palette.primary.contrastText,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "2vw",
                }}
              >
                Line Following/RC Robot
              </h1>
              <video width="100%" height="100%" muted autoPlay loop>
                <source src={robot1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div
            style={{
              height: "100%",
              flexGrow: 1,
              flexDirection: "column",
              color: theme.palette.primary.contrastText,
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "2vw",
              }}
            >
              Dancing Robot
            </h1>
            <video width="100%" height="100%" muted autoPlay loop>
              <source src={dancingrobot1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </>
    );
  }
}

export default withTheme(
  withWidth()(handleViewport(Home0), { rootMargin: "-1px" })
);
